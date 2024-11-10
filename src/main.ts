import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const configService = app.get(ConfigService);
  const GatewayPort = configService.getOrThrow('MAIN_API_GATEAWAY_PORT');

  app.setGlobalPrefix('/v1/api');
  await app.listen(GatewayPort);
}
bootstrap();
