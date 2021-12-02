import dotenv from 'dotenv';

dotenv.config();

import typeDefs from './types/index';
import resolvers from './resolvers/index';
import usersLoader from './dataloaders/user';
import { ApolloServer } from 'apollo-server-lambda';
import { buildFederatedSchema } from '@apollo/federation';
import { Context } from './interfaces/context';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: (): Context => {
    return {
      usersLoader: usersLoader.create(),
    };
  },
});

exports.handler = server.createHandler();
