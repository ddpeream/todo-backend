// ormconfig.ts
export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'lets_goal',
  password: 'LetsGoal123#',
  database: 'todo',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/database/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
};