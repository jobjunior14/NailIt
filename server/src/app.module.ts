import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configuration/typeorm.conf';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MailModule } from './mail/mail.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './publications/products/products.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UploadModule } from './upload/upload.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
      // uploads: {
      //   maxFileSize: 24000000, // 10 MB
      //   maxFiles: 10,
      // },
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MongooseModule.forRoot(process.env.DATABASE_LOCAL_MONGODB),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    MailModule,
    ProductsModule,
    UploadModule,
  ],
})
export class AppModule {}
