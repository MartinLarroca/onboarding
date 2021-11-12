import query from './query';
import user from './user';
import tweet from './tweet';
import comment from './comment';
import mutation from './mutation';
import Date from '../customScalars/dates';
import { mergeTypeDefs } from '@graphql-tools/merge';

const toMergeTypes = [
  query,
  user,
  tweet,
  comment,
  Date.DateDefiniton,
  mutation,
];

export default mergeTypeDefs(toMergeTypes);
