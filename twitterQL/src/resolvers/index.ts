import QueryResolver from './query';

import Date from '../customScalars/dates';

const Resolvers = {
  Query: QueryResolver,
  Date: Date.dateResolver,
};

export default Resolvers;
