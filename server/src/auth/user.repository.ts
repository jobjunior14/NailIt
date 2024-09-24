import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { SignUpDto } from './dto/signUp.dto';
import { SignInDto } from './dto/signIn.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async signUp(signUpDto: SignUpDto): Promise<User> {
    try {
      const {
        user_name,
        name,
        email,
        phone_number,
        secret_question,
        secret_answer,
        password,
      } = signUpDto;

      const query: string =
        'INSERT INTO users (user_name, name, email, phone_number, secret_question, secret_answer, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';

      const createdUser = await this.dataSource.query(query, [
        user_name,
        name,
        email,
        phone_number,
        secret_question,
        secret_answer,
        password,
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

  async SignIn(userData: SignInDto): Promise<User[]> {
    try {
      const { email } = userData;

      const findUser: User[] = await this.dataSource.query(
        `SELECT * FROM users WHERE email = $1`,
        [email],
      );

      return findUser;
    } catch (error) {
      throw new InternalServerErrorException('Ouups try again');
    }
  }
}
