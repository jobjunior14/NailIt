import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { JwtStategy } from './jwt.strategy';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRE_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UserRepository, JwtStategy],
  exports: [JwtStategy, PassportModule],
})
export class AuthModule {}
