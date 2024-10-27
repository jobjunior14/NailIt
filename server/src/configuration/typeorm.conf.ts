import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { HasLinks } from 'src/auth/entities/hasLink.entity';
import { User } from 'src/auth/entities/user.entity';
import { Website } from 'src/auth/entities/website.entiy';

// Load environment variables
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity.ts', User, Website, HasLinks],
  synchronize: true,
  logging: true,
};
