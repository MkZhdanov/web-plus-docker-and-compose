import { join } from 'path';

export default () => ({
  server: { port: parseInt(process.env.SERVER_PORT, 10) || 3001 },
  database: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.POSTGRES_HOST || 'postgres',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || 'student',
    database: process.env.POSTGRES_DB || 'nest_project',
    entities: [join(__dirname, '/../**/*.entity.{js,ts}')],
    synchronize: Boolean(process.env.DB_SYNCHRONIZE) || true,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'SECRET',
    exp: process.env.JWT_EXPIRES || '30m',
  },
});
