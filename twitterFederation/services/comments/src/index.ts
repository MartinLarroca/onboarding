import dotenv from 'dotenv';

dotenv.config();

import { ApolloServer } from 'apollo-server';
import typeDefs from './types/index';
import resolvers from './resolvers/index';
import { buildFederatedSchema } from '@apollo/federation';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: process.env.PORT || 8081 }).then(({ url }) => {
  console.log(`Comments service running at ${url}`);
});
