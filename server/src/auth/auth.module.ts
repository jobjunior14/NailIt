import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './models/user.entity';
import { UserRepository } from './repositories/user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import * as dotenv from 'dotenv';
import { JwtStrategy, JwtAuthGuard } from './jwt.strategy';
import { WebsiteRepository } from './repositories/website.repository';
import { HasLinksRepository } from './repositories/hasLink.repository';
import { HasLinksEntity } from './models/hasLink.entity';
import { WebsiteEntity } from './models/website.entiy';
import { UserResolver } from './auth.resolver';
import { MailModule } from 'src/mail/mail.module';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, HasLinksEntity, WebsiteEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.EXPIRE_IN,
      },
    }),
    MailModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserRepository,
    JwtAuthGuard,
    JwtStrategy,
    WebsiteRepository,
    HasLinksRepository,
    UserResolver,
  ],
  exports: [JwtStrategy, PassportModule, JwtAuthGuard],
})
export class AuthModule {}
