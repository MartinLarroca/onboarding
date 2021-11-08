import { Sequelize } from "sequelize";

const config = require("./config");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: "mysql",
  }
);

const Database: any = { sequelize: sequelize };

export default Database;
