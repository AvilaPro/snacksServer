import { PartialType } from '@nestjs/mapped-types';
import { CreateAsignacionDto } from './create-asignacione.dto';

export class UpdateAsignacionDto extends PartialType(CreateAsignacionDto) {}
