import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { webcrypto } from 'crypto';

if (!globalThis.crypto) {
  globalThis.crypto = webcrypto as any;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
        'http://localhost:4200', //para permitir peticiones desde desarrollo.
        'https://snackscontrol.web.app', //URL del front de contabilidad
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });

  await app.listen(process.env.PORT ?? 3000);
  // console.log('Server running on http://localhost:3000');
}
bootstrap();
