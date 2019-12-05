import {NestExpressApplication} from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './appModule';
import { HttpExceptionFilter } from './exceptionFilter';

(async () => {
  const app = await NestFactory.create<NestExpressApplication>(ApplicationModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.listen(3000);
})();