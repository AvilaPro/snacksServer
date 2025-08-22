import { PartialType } from '@nestjs/mapped-types';
import { CreateReunionDto } from './create-reunione.dto';

export class UpdateReunionDto extends PartialType(CreateReunionDto) {}
