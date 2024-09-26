import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { SignUpDto } from './dto/signUp.dto';
import { User } from './user.entity';
import {
  comparePasswords,
  hashPassword,
  verifyPasswordAndPasswordConfirm,
} from './password.utility';
import { SignInDto } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';
import { SignInInterface } from './interfaces/singIn-return.interface';
import { JwtPayloadInterface } from './interfaces/jwt-interface.payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(user_data: SignUpDto): Promise<User> {
    //concat the user name and surname to be saved in the database
    const normalize_name = (name: string): string => {
      return name[0].toUpperCase() + name.slice(1).toLowerCase();
    };

    user_data.name =
      normalize_name(user_data.name) + ' ' + normalize_name(user_data.surname);

    //verify the confirmation password and the password
    if (
      !verifyPasswordAndPasswordConfirm(
        user_data.password,
        user_data.password_confirm,
      )
    ) {
      throw new BadRequestException(
        'Password and confirmation password do not match',
      );
    }

    //hash the password
    user_data.password = await hashPassword(user_data.password);

    //hash the secret answer
    user_data.secret_answer = await hashPassword(user_data.secret_answer);

    const createdUser = await this.userRepository.signUp(user_data);

    return createdUser;
  }

  async signIn(user_data: SignInDto): Promise<SignInInterface> {
    const user: User[] = await this.userRepository.SignIn(user_data.email);

    if (
      user.length === 0 ||
      !(await comparePasswords(user_data.password, user[0].password))
    ) {
      throw new UnauthorizedException('Wrong mail or password');
    }

    const payLoad: JwtPayloadInterface = { email: user[0].email };
    const token = this.jwtService.sign(payLoad);

    return {
      userData: user,
      token,
    };
  }
}
