import { DataSource, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SignUpDto } from '../dto/signUp.dto';
import { passwordType } from '../interfaces_and_types/password.type';
import { InjectRepository } from '@nestjs/typeorm';
import { ResetPassworWithSecretAnswerdDto } from '../dto/reset-passwordWithSercreAnswer.dto';
import { updateUserDto } from '../dto/updateUser.dto';
import { HasLinksEntity } from '../entities/hasLink.entity';
import { HasLinksRepository } from './hasLink.repository';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(UserEntity)
    @InjectRepository(HasLinksEntity)
    private readonly userRepository: Repository<UserEntity>,
    private hasLinksRepository: HasLinksRepository,
  ) {
    super(
      userRepository.target,
      userRepository.manager,
      userRepository.queryRunner,
    );
  }

  async signUp(
    signUpDto: SignUpDto,
    localisation: string,
  ): Promise<UserEntity> {
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

  async SignIn(emailData: string): Promise<UserEntity[]> {
    try {
      const email = emailData;

      const findUser: UserEntity[] = await this.dataSource.query(
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
    user_data: ResetPassworWithSecretAnswerdDto,
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

  async updateUser(
    user_data: updateUserDto,
    currentUserName: string,
  ): Promise<string> {
    try {
      const query =
        'UPDATE users SET user_name_id = $1, name = $2, prename = $3, localisation = $4, country = $5, city = $6 WHERE user_name_id = $7';
      await this.dataSource.query(query, [
        user_data.user_name_id,
        user_data.name,
        user_data.prename,
        user_data.localisation,
        user_data.country,
        user_data.city,
        currentUserName,
      ]);

      // update or insert data in the hasLink Table
      if (user_data.websites) {
        for (const i of user_data.websites) {
          try {
            const dataInHasLink: HasLinksEntity[] =
              await this.hasLinksRepository.query(
                'SELECT * FROM has_links WHERE user_id = $1 AND website_id = $2',
                [user_data.user_name_id, i.id],
              );

            if (dataInHasLink.length === 0) {
              await this.dataSource.query(
                'INSERT INTO has_links (user_id, website_id, link) VALUES ($1, $2, $3)',
                [user_data.user_name_id, i.id, i.link],
              );
            } else {
              await this.hasLinksRepository.query(
                'UPDATE has_links SET link = $1 WHERE user_id = $2 AND website_id = $3',
                [i.link, user_data.user_name_id, i.id],
              );
            }
          } catch (error) {
            if (error.code === '23505') {
              throw new ConflictException(
                'User already has this profile link for this link name.',
              );
            }
            throw new BadRequestException(
              'Failed to create one of your link, try later',
            );
          }
        }
      }

      return 'User data updated';
    } catch (error) {
      // Check if it's a QueryFailedError from TypeORM
      if (error.code === '23505') {
        throw new ConflictException(
          'email, or telephone number already exists on another account.',
        );
      }

      console.log(error);
      throw new BadRequestException('Failed to update the user.');
    }
  }
}
