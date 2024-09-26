import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as dotenv from 'dotenv';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayloadInterface } from './interfaces/jwt-interface.payload.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

// Load environment variables
dotenv.config();

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(paylod: JwtPayloadInterface): Promise<User[]> {
    const { email } = paylod;

    const user: User[] = await this.userRepository.SignIn(email);

    if (user.length === 0) {
      throw new UnauthorizedException('');
    }

    return user;
  }
}
