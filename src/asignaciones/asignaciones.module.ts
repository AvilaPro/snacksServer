import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsignacionesService } from './asignaciones.service';
import { AsignacionesController } from './asignaciones.controller';
import { Asignacion } from './entities/asignacione.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asignacion])],
  controllers: [AsignacionesController],
  providers: [AsignacionesService],
  exports: [AsignacionesService],
})
export class AsignacionesModule {}
