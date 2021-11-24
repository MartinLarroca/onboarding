import Tweet from '../models/tweet';

export default {
  user: async (tweet: Tweet) => {
    const { userId } = await Tweet.findByPk(tweet.id);
    return { __typename: 'User', id: userId };
  },

  __resolveReference: async ({ id }: { id: string }) =>
    await Tweet.findByPk(id),
};
