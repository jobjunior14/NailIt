import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configuration/typeorm.conf';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_LOCAL_MONGODB),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    MailModule,
    ProductsModule,
  ],
})
export class AppModule {}
