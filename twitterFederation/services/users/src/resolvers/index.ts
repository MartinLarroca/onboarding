import QueryResolver from './query';
import MutationResolver from './mutation';
import UserResolver from './user';
import Date from '../customScalars/dates';

const Resolvers = {
  Query: QueryResolver,
  Mutation: MutationResolver,
  User: UserResolver,
  Date: Date.DateResolver,
};

export default Resolvers;
