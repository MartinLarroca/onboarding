import Tweet from '../models/tweet';

export default {
  tweets: async () => {
    return await Tweet.findAll({ raw: true });
  },
  tweet: async (parent: any, args: any, context: any) => {
    return await Tweet.findByPk(args.id, { raw: true });
  },
};
