import typeDefs from './types/index';
import resolvers from './resolvers/index';
import usersLoader from './dataloaders/user';
import { ApolloServer } from 'apollo-server-lambda';
import { buildFederatedSchema } from '@apollo/federation';

const server = new ApolloServer({
  debug: false,
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: () => {
    usersLoader: usersLoader.create();
  },
});
exports.handler = server.createHandler();
