import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CORS } from './common/constants';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  const configService = app.get(ConfigService);
  app.enableCors(CORS);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('eSports Arena')
    .setDescription(
      'This API enables the management of eSports tournaments, allowing for efficient ' +
      'handling of players, tournaments, and match results. \n\n' +
      '### Main Features: \n' +
      '- Player registration and management. \n' +
      '- Tournament creation and administration. \n' +
      '- Match result recording and retrieval. \n' +
      '- Automatic match pairing generation. \n\n' +
      '🔗 Documentation generated with Swagger.'
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(configService.get('PORT'));
}
bootstrap();
