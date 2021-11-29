import { Tweet } from '../models/tweet';

export default {
  addTweet: async (_: any, { tweet }: any) => await Tweet.create(tweet),

  updateTweet: async (_: any, { tweet: { id, ...data } }: { tweet: any }) => {
    const tweet = await Tweet.findByPk(id);
    return await tweet.update(data);
  },

  deleteTweet: async (_: any, { id }: any) => {
    const tweet = await Tweet.findByPk(id);
    return await tweet.destroy();
  },
};
