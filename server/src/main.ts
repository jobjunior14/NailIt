import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { graphqlUploadExpress } from 'graphql-upload';

// Load environment variables
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(graphqlUploadExpress({ maxFileSize: 24000000, maxFiles: 10 }));
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
