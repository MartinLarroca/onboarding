import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';
import errorHandler from './errors';

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'users',
      url: 'http://0.0.0.0:8083', // localhost no anda
    },
    {
      name: 'comments',
      url: 'http://0.0.0.0:8081',
    },
    {
      name: 'tweets',
      url: 'http://0.0.0.0:8084',
    },
  ],
});

const server = new ApolloServer({
  gateway,
  formatError: errorHandler,
  debug: false,
});

server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`Gateway running at ${url}`);
});
