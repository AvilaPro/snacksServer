import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReunionDto } from './dto/create-reunione.dto';
import { UpdateReunionDto } from './dto/update-reunione.dto';
import { Reunion } from './entities/reunione.entity';

@Injectable()
export class ReunionesService {
  constructor(
    @InjectRepository(Reunion)
    private reunionesRepository: Repository<Reunion>,
  ) {}

  create(createReunionDto: CreateReunionDto) {
    const reunion = this.reunionesRepository.create(createReunionDto);
    return this.reunionesRepository.save(reunion);
  }

  findAll() {
    return this.reunionesRepository.find();
  }

  findOne(id: number) {
    return this.reunionesRepository.findOne({ where: { id } });
  }

  findLatest() {
    return this.reunionesRepository.findOne({ 
      where: {},
      order: { fecha: 'DESC' } 
    });
  }

  update(id: number, updateReunionDto: UpdateReunionDto) {
    return this.reunionesRepository.update(id, updateReunionDto);
  }

  remove(id: number) {
    return this.reunionesRepository.delete(id);
  }
}
