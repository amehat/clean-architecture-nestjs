import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';


import AppModule from './infrastructure/app.module';

export default async function bootstrap() {
  const port = 4000;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port, () => {
    Logger.log(`Clean Architecture with NestJS start on ${port}`);
  });
}
