import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './jwt.strategy';
import { WebsiteRepository } from './repositories/website.repository';
import { HasLinksRepository } from './repositories/hasLink.repository';
import { HasLinks } from './entities/hasLink.entity';
import { Website } from './entities/website.entiy';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([User, HasLinks, Website]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRE_IN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    JwtStrategy,
    WebsiteRepository,
    HasLinksRepository,
  ],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
