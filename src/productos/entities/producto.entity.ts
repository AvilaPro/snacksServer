import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  categoria: string;

  @Column({ default: true })
  disponible: boolean;

  @Column({ nullable: true })
  imagen_url: string;
}
