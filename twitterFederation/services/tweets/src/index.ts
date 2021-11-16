import typeDefs from './types/index';
import resolvers from './resolvers/index';
import { create, DataLoaderType } from './dataloaders/tweet';
import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: ({ req }) => {
    console.log(req.protocol);
    return {
      ResolveReferenceLoader: create(DataLoaderType.Reference),
      TweetsGivenUserLoader: create(DataLoaderType.User),
      TweetsUserReferenceLoader: create(DataLoaderType.UserReference),
    };
  },
});

server.listen({ port: process.env.PORT || 8082 }).then(({ url }) => {
  console.log(`Tweets service running at ${url}`);
});
