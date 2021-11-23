import query from './query';
import user from './user';
import tweet from './tweet';
import comment from './comment';
import mutation from './mutation';
import Date from '../customScalars/dates';

export default [query, user, tweet, comment, Date.dateDefiniton, mutation];
