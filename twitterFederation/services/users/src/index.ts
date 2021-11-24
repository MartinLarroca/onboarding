import dotenv from 'dotenv';
import typeDefs from './types/index';
import resolvers from './resolvers/index';
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

dotenv.config();

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

server.listen({ port: process.env.PORT || 8083 }).then(({ url }) => {
  console.log(`Users service running at ${url}`);
});
