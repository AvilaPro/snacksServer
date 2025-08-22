import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReunionesService } from './reuniones.service';
import { ReunionesController } from './reuniones.controller';
import { Reunion } from './entities/reunione.entity';
import { ProductosModule } from '../productos/productos.module';
import { AsignacionesModule } from '../asignaciones/asignaciones.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reunion]),
    ProductosModule,
    AsignacionesModule
  ],
  controllers: [ReunionesController],
  providers: [ReunionesService],
})
export class ReunionesModule {}
