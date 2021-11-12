import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'users',
      url: 'http://localhost:8083',
    },
    {
      name: 'comments',
      url: 'http://localhost:8081',
    },
    {
      name: 'tweets',
      url: 'http://localhost:8084',
    },
  ],
});

const server = new ApolloServer({ gateway, context: { prop: 'fafklasjklds' } });

server.listen({ port: process.env.PORT || 8080 }).then(({ url }) => {
  console.log(`Gateway running at ${url}`);
});
