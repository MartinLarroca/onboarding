import QueryResolver from './query';
import UserResolver from './user';
import TweetResolver from './tweet';
import CommentResolver from './comment';
import Date from '../customScalars/dates';

const Resolvers = {
  Query: QueryResolver,
  Date: Date.dateResolver,
  User: UserResolver,
  Tweet: TweetResolver,
  Comment: CommentResolver,
};

export default Resolvers;
