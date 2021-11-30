import dotenv from 'dotenv';

dotenv.config();

import typeDefs from './types/index';
import resolvers from './resolvers/index';
import usersLoader from './dataloaders/user';
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: () => {
    return {
      usersLoader: usersLoader.create(),
    };
  },
});

server.listen({ port: process.env.PORT || 8083 }).then(({ url }) => {
  console.log(`Users service running at ${url}`);
});
