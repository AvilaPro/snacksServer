import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Producto } from './productos/entities/producto.entity';
import { Reunion } from './reuniones/entities/reunione.entity';
import { Asignacion } from './asignaciones/entities/asignacione.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME', 'snacks_db'),
        entities: [Producto, Reunion, Asignacion],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class TypeormModule {}