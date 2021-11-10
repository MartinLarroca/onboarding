import Tweet from '../models/tweet';

export default {
  tweets: async () => {
    return await Tweet.findAll({ raw: true });
  },
  tweet: async (_: any, data: any) => {
    return await Tweet.findByPk(data.id, { raw: true });
  },
};
