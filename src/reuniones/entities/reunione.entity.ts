import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reuniones')
export class Reunion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_reunion: string;

  @Column('date')
  fecha: Date;

  @Column('text', { nullable: true })
  descripcion: string;
}
