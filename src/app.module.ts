import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { ReunionesModule } from './reuniones/reuniones.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';
import { TypeormModule } from './typeorm.module';

@Module({
  imports: [TypeormModule, ProductosModule, ReunionesModule, AsignacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
