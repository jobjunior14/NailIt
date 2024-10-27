import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as dotenv from 'dotenv';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayloadInterface } from './interfaces_and_types/jwt-interface.payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './repositories/user.repository';
import { User } from './entities/user.entity';

// Load environment variables
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayloadInterface): Promise<User> {
    const { email, iat } = payload;

    // Fetch user from the repository
    const user: User = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Invalid Token');
    }

    // Check if password has been changed after the JWT was issued
    const isPasswordChanged = await user.changePasswordAfterIsued(iat);

    const isEmailChanged = await user.changeEmailAfterIsued(iat);

    const isSecretAnswerChanged = await user.changeSecreteAnswer(iat);

    if (isPasswordChanged || isEmailChanged || isSecretAnswerChanged) {
      throw new UnauthorizedException(
        'Password or Email or Secret answer has been changed, please login again.',
      );
    }

    return user;
  }
}
