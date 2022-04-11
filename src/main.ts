import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //파이프
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  await app.listen(port);
}
bootstrap();


console.log(`http://localhost:${port}`);