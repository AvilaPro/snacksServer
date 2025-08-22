import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsignacionDto } from './dto/create-asignacione.dto';
import { UpdateAsignacionDto } from './dto/update-asignacione.dto';
import { Asignacion } from './entities/asignacione.entity';

@Injectable()
export class AsignacionesService {
  constructor(
    @InjectRepository(Asignacion)
    private asignacionesRepository: Repository<Asignacion>,
  ) {}

  create(createAsignacionDto: CreateAsignacionDto) {
    const asignacion = this.asignacionesRepository.create(createAsignacionDto);
    return this.asignacionesRepository.save(asignacion);
  }

  findAll() {
    return this.asignacionesRepository.find({ relations: ['reunion', 'producto'] });
  }

  findOne(id: number) {
    return this.asignacionesRepository.findOne({ 
      where: { id }, 
      relations: ['reunion', 'producto'] 
    });
  }

  findByReunion(reunionId: number) {
    return this.asignacionesRepository.find({ 
      where: { id_reunion: reunionId }, 
      relations: ['producto'] 
    });
  }

  update(id: number, updateAsignacionDto: UpdateAsignacionDto) {
    return this.asignacionesRepository.update(id, updateAsignacionDto);
  }

  remove(id: number) {
    return this.asignacionesRepository.delete(id);
  }
}
