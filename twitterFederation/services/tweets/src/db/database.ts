import { Sequelize } from 'sequelize';

export default {
  sequelize: new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
    }
  ),
};
