import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
        'http://localhost:4200', //para permitir peticiones desde desarrollo.
        'https://triunfocont.web.app', //URL del front de contabilidad
        'https://avilaprofacturacion.web.app', //URL del front del proyecto de facturacion
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true
  });

  await app.listen(3000);
  console.log('Server running on http://localhost:3000');
}
bootstrap();
