import { Tweet } from '../models/tweet';

export default {
  tweets: async () => await Tweet.findAll(),
  tweet: async (parent: any, args: any, context: any) =>
    await Tweet.findByPk(args.id),
};
