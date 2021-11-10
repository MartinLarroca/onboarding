import QueryResolver from './query';
import UserResolver from './user';
import CommentResolver from './comment';
import MutationResolver from './mutation';
import Date from '../customScalars/dates';

const Resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,
  User: UserResolver,
  Comment: CommentResolver,
  Date: Date.DateResolver,
};

export default Resolvers;
