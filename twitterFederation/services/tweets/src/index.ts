import dotenv from 'dotenv';

dotenv.config();

import typeDefs from './types/index';
import resolvers from './resolvers/index';
import { create, DataLoaderType } from './dataloaders/tweet';
import { ApolloServer } from 'apollo-server-lambda';
import { buildFederatedSchema } from '@apollo/federation';
import { Context } from './interfaces/context';

const server = new ApolloServer({
  debug: false,
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: (): Context => {
    return {
      ResolveReferenceLoader: create(DataLoaderType.Reference),
      TweetsGivenUserLoader: create(DataLoaderType.User),
      TweetsUserReferenceLoader: create(DataLoaderType.UserReference),
    };
  },
});

exports.handler = server.createHandler();
