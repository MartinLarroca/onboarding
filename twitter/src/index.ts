import dotenv from 'dotenv';
import express from 'express';
import { Database } from './models/index'

Database.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// initialize configuration from .env file

dotenv.config();
const port = process.env.PORT;
const env = process.env.ENV;
const server = express();

server.get('/', (req, res) => {
  res.send("Welcome to the server");
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}, current enviroment is: ${env}`);
});