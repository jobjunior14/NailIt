import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { SignUpDto } from './dto/signUp.dto';
import { User } from './user.entity';
import {
  hashPassword,
  verifyPasswordAndPasswordConfirm,
} from './password.utility';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(userData: SignUpDto): Promise<User> {
    //concat the user name and surname to be saved in the database
    userData.name =
      userData.name[0].toUpperCase() + userData.name.slice(1).toLowerCase();
    userData.surname =
      userData.surname[0].toUpperCase() +
      userData.surname.slice(1).toLowerCase();
    userData.name = userData.name + ' ' + userData.surname;

    //verify the confirmation password and the password
    if (
      !verifyPasswordAndPasswordConfirm(
        userData.password,
        userData.password_confirm,
      )
    ) {
      throw new BadRequestException(
        'Password and confirmation password do not match',
      );
    }

    //hash the password
    userData.password = await hashPassword(userData.password);

    //hash the secret answer
    userData.secret_answer = await hashPassword(userData.secret_answer);

    const createdUser = await this.userRepository.signUp(userData);

    return createdUser;
  }
}
