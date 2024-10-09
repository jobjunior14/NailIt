import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SignUpDto } from '../dto/signUp.dto';
import { passwordType } from '../interfaces_and_types/password.type';
import { InjectRepository } from '@nestjs/typeorm';
import { ResetPasswordDto } from '../dto/reset-password.dto';
import { updateUserDto } from '../dto/updateUser.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async signUp(signUpDto: SignUpDto, localisation: string): Promise<User> {
    try {
      const {
        user_name_id,
        name,
        email,
        phone_number,
        secret_word,
        secret_answer,
        password,
        prename,
        country,
        city,
      } = signUpDto;

      const query: string =
        'INSERT INTO users (user_name_id, name, prename, email, phone_number, secret_word, secret_answer, password, localisation, country, city) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *';

      const createdUser = await this.dataSource.query(query, [
        user_name_id,
        name,
        prename,
        email,
        phone_number,
        secret_word,
        secret_answer,
        password,
        localisation,
        country,
        city,
      ]);

      return createdUser;
    } catch (error) {
      // Check if it's a QueryFailedError from TypeORM
      if (error.code === '23505') {
        throw new ConflictException(
          'Username, email, or telephone number already exists.',
        );
      }

      // Log and throw generic error for other cases
      throw new BadRequestException('Failed to create user.');
    }
  }

  async SignIn(emailData: string): Promise<User[]> {
    try {
      const email = emailData;

      const findUser: User[] = await this.dataSource.query(
        `SELECT * FROM users WHERE email = $1`,
        [email],
      );

      return findUser;
    } catch (error) {
      throw new InternalServerErrorException('Ouups try again');
    }
  }

  async getUserPasswordById(user_name_id: string): Promise<passwordType[]> {
    try {
      const user: passwordType[] = await this.dataSource.query(
        'SELECT password FROM users WHERE user_name_id = $1',
        [user_name_id],
      );

      return user;
    } catch (error) {
      throw new InternalServerErrorException('Ouups try again');
    }
  }

  async updatePassword(
    user_name_id: string,
    new_password: string,
    timestamp: Date,
  ): Promise<string> {
    try {
      await this.dataSource.query(
        'UPDATE users SET password = $1, password_updated_at = $2 WHERE user_name_id = $3',
        [new_password, timestamp, user_name_id],
      );

      return 'Password updated';
    } catch (error) {
      throw new InternalServerErrorException('Ouups try again');
    }
  }

  async resetPasswordWithSecretAnswer(
    user_data: ResetPasswordDto,
    timestamp: Date = new Date(),
  ): Promise<string> {
    try {
      await this.dataSource.query(
        'UPDATE users SET password = $1, password_updated_at = $2 WHERE email = $3',
        [user_data.new_password, timestamp, user_data.email],
      );

      return 'Password updated';
    } catch (error) {
      throw new InternalServerErrorException('Ouups try again');
    }
  }

  async updateUser(user_data: updateUserDto): Promise<string> {
    try {
    } catch (error) {
      // Check if it's a QueryFailedError from TypeORM
      if (error.code === '23505') {
        throw new ConflictException(
          'email, or telephone number already exists on another account.',
        );
      }

      throw new BadRequestException('Failed to update the user.');
    }
  }
}
