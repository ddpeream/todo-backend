// src/database/data-source.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgresql://postgres:YmzpGStspcELADLfszRaHkEICZfzjUqa@autorack.proxy.rlwy.net:52268/railway',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
});