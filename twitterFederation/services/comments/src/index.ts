import dotenv from 'dotenv';

dotenv.config();

import { ApolloServer } from 'apollo-server';
import typeDefs from './types/index';
import resolvers from './resolvers/index';
import { create, DataLoaderType } from './dataloaders/comment';
import { buildFederatedSchema } from '@apollo/federation';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  context: () => {
    return {
      CommentsGivenUserLoader: create(DataLoaderType.User),
      CommentsGivenTweetLoader: create(DataLoaderType.Tweet),
      CommentsUserReferenceLoader: create(DataLoaderType.UserReference),
      CommentsTweetReferenceLoader: create(DataLoaderType.TweetReference),
    };
  },
});

server.listen({ port: process.env.PORT || 8081 }).then(({ url }) => {
  console.log(`Comments service running at ${url}`);
});
