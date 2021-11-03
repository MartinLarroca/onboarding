import dotenv from 'dotenv';
import express from 'express';
import { Database } from './models/index'

import users from './seeders/users';
import tweets from './seeders/tweets';
import comments from './seeders/comments';

const seed = () => {

  Object.entries(users).forEach(([key, value]) => {
    console.log(value);
    Database.users.create(value);
  });

  Object.entries(tweets).forEach(([key, value]) => {
    console.log(value);
    Database.tweets.create(value);
  });

  Object.entries(comments).forEach(([key, value]) => {
    console.log(value);
    Database.comments.create(value);
  });

};




Database.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  seed(); // this line goes where because of concurrency, before doing this we need to set up the database
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