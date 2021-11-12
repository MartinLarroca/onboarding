import query from './query';
import user from './user';
import mutation from './mutation';
import Date from '../customScalars/dates';

import { mergeTypeDefs } from '@graphql-tools/merge';

const toMergeTypes = [query, mutation, user, Date.DateDefiniton];

export default mergeTypeDefs(toMergeTypes);
