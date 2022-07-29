import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const port = 5000;
const logger = new Logger();

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  logger.log(`Server Running on port ${port}`);
};

bootstrap();
