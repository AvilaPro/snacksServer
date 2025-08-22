import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  create(createProductoDto: CreateProductoDto) {
    const producto = this.productosRepository.create(createProductoDto);
    return this.productosRepository.save(producto);
  }

  findAll() {
    return this.productosRepository.find();
  }

  findOne(id: number) {
    return this.productosRepository.findOne({ where: { id } });
  }

  update(id: number, updateProductoDto: UpdateProductoDto) {
    return this.productosRepository.update(id, updateProductoDto);
  }

  remove(id: number) {
    return this.productosRepository.delete(id);
  }
}
