import { Context } from '../interfaces/context';
import { Tweet } from '../models/tweet';

export default {
  tweets: async () => await Tweet.findAll(),
  tweet: async (parent: any, args: any, context: Context) =>
    await Tweet.findByPk(args.id),
};
