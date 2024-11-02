import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { HasLinksEntity } from 'src/auth/entities/hasLink.entity';
import { UserEntity } from 'src/auth/entities/user.entity';
import { WebsiteEntity } from 'src/auth/entities/website.entiy';

// Load environment variables
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
  entities: [
    __dirname + '/../**/*.entity.ts',
    UserEntity,
    WebsiteEntity,
    HasLinksEntity,
  ],
  synchronize: true,
  // logging: true,
};
