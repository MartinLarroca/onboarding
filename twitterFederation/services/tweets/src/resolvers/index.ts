import QueryResolver from './query';
import UserResolver from './user';
import TweetResolver from './tweet';
import MutationResolver from './mutation';
import Date from '../customScalars/dates';

const Resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,
  User: UserResolver,
  Tweet: TweetResolver,
  Date: Date.DateResolver,
};

export default Resolvers;
