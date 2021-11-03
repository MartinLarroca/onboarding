import { Sequelize } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD, // not defined in .env so it's value is null
    database: process.env.DB_NAME,
    host: '127.0.0.1',
  }
}

const sequelize = new Sequelize(config.development.database,
                                config.development.username,
                                config.development.password, {
                                host: config.development.host,
                                dialect: 'mysql'
});

const db: any = {sequelize: sequelize};

export { db as Database };