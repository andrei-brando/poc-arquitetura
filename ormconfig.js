require('dotenv').config();

let config = {};

const isProduction = process.env.NODE_ENV === 'production';

const logging = !isProduction ? console.log : false;

const ssl = isProduction ? {
  rejectUnauthorized: false,
} : null;

config = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  logging,
  ssl,
  // entities: [
  //   'src/core/infra/data/database/entities/**/*'
  // ],
  // migrations: [
  //   'src/core/infra/data/database/migrations/**/*'
  // ],
  // cli: {
  //   entitiesDir: 'src/core/infra/data/database/entities',
  //   migrationsDir: 'src/core/infra/data/database/migrations'
  // },
}