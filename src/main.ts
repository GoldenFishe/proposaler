import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import { AppModule } from './features/app/app.module';
import { createStaticFolders } from './presetup';

async function bootstrap() {
  createStaticFolders();

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', 'static'), { prefix: '/static/' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(8080);
}

bootstrap();
