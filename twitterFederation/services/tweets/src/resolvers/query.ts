import { Tweet } from '../models/tweet';

export default {
  tweets: async (parent: any, args: any, context: any) => {
    const tweets = await Tweet.findAll({ raw: true });
    return tweets;
  },
  tweet: async (parent: any, args: any, context: any) => {
    return await Tweet.findByPk(args.id, { raw: true });
  },
};
