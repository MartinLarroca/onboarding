import dotenv from 'dotenv';
import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

dotenv.config();

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'users',
      url: 'http://0.0.0.0:8081',
    },
    {
      name: 'comments',
      url: 'http://0.0.0.0:8083',
    },
    {
      name: 'tweets',
      url: 'http://0.0.0.0:8082',
    },
  ],
});

const server = new ApolloServer({ gateway });

server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`Gateway running at ${url}`);
});
