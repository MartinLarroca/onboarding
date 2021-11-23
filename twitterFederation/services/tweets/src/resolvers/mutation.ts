import Tweet from '../models/tweet';

export default {
  addTweet: async (_: any, data: any) => {
    return await Tweet.create(data.tweet);
  },
  updateTweet: async (_: any, data: any) => {
    const { id, ...tweet_data } = data.tweet;
    await Tweet.update(tweet_data, { where: { id } });
    return await Tweet.findByPk(id);
  },
  deleteTweet: async (_: any, data: any) => {
    return await Tweet.destroy({ where: { id: data.id } });
  },
};
