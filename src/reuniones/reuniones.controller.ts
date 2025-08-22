import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReunionesService } from './reuniones.service';
import { ProductosService } from '../productos/productos.service';
import { AsignacionesService } from '../asignaciones/asignaciones.service';
import { CreateReunionDto } from './dto/create-reunione.dto';
import { UpdateReunionDto } from './dto/update-reunione.dto';

@Controller('reuniones')
export class ReunionesController {
  constructor(
    private readonly reunionesService: ReunionesService,
    private readonly productosService: ProductosService,
    private readonly asignacionesService: AsignacionesService,
  ) {}

  @Post()
  create(@Body() createReunionDto: CreateReunionDto) {
    return this.reunionesService.create(createReunionDto);
  }

  @Get()
  findAll() {
    return this.reunionesService.findAll();
  }

  @Get('latest')
  findLatest() {
    return this.reunionesService.findLatest();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reunionesService.findOne(+id);
  }

  @Get(':id/productos')
  async getProductosReunion(@Param('id') id: string) {
    const productos = await this.productosService.findAll();
    const asignaciones = await this.asignacionesService.findByReunion(+id);
    return { productos, asignaciones };
  }

  @Post(':id/asignar')
  asignarProducto(@Param('id') id: string, @Body() asignacionData: any) {
    const data = {
      ...asignacionData,
      id_reunion: +id
    };
    return this.asignacionesService.create(data);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReunionDto: UpdateReunionDto) {
    return this.reunionesService.update(+id, updateReunionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reunionesService.remove(+id);
  }
}
