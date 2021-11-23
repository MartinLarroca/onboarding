import Tweet from '../models/tweet';

export default {
  user: async (tweet: Tweet) => {
    const result = await Tweet.findByPk(tweet.id);
    return { __typename: 'User', id: result.user_id };
  },

  __resolveReference: async ({ id }: { id: string }) => {
    console.log(id);
    return await Tweet.findByPk(id);
  },
};
