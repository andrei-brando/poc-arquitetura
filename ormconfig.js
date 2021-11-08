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
  entities: [
    'src/infra/database/entities/**/*'
  ],
  migrations: [
    'src/infra/database/migrations/**/*'
  ],
  cli: {
    entitiesDir: 'src/infra/database/entities',
    migrationsDir: 'src/infra/database/migrations'
  },
}

module.exports = config;