import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';


import AppModule from './modules/app/app.module';

export default async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000, () => {
    Logger.log('Clean Architecture with NestJS start on 3000');
  });
}
