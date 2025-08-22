import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Reunion } from '../../reuniones/entities/reunione.entity';
import { Producto } from '../../productos/entities/producto.entity';

@Entity('asignaciones')
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_reunion: number;

  @Column()
  id_producto: number;

  @Column()
  nombre_amigo: string;

  @Column()
  cantidad: number;

  @Column('text', { nullable: true })
  comentario: string;

  @ManyToOne(() => Reunion)
  @JoinColumn({ name: 'id_reunion' })
  reunion: Reunion;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'id_producto' })
  producto: Producto;
}
