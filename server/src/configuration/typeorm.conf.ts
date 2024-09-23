import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Olingebisimwa@14',
  database: 'nailit',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
