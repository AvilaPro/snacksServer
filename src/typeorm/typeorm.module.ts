import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asignacion } from 'src/asignaciones/entities/asignacione.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Reunion } from 'src/reuniones/entities/reunione.entity';



@Module({

  imports: [TypeOrmModule.forRoot({

    //Para pruebas locales
    // port: 5433,
    // username: 'postgres',
    // password: '153709',
    // database: 'chuches01',

    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [
      Producto,
      Reunion,
      Asignacion
    ],
    synchronize: process.env.NODE_ENV === 'production', // Solo en desarrollo, se configura production cuando queremos sincronizar la base de datos con el modelo en las entities.
    migrationsRun: process.env.NODE_ENV === 'production', // Corre migraciones en producción
    logging: process.env.NODE_ENV === 'development', // Logs detallados solo en desarrollo
    ssl: process.env.NODE_ENV === 'production', // SSL si es necesario en producción
    extra: {
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }
  }),
  TypeOrmModule.forFeature([
    Producto,
    Reunion,
    Asignacion
  ])
  ]
})
export class TypeormModule { }