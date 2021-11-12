import Tweet from '../models/tweet';

export default {
  user: async (tweet: Tweet, args: any, context: any) => {
    const result = await Tweet.findByPk(tweet.id, { raw: true });
    console.log(context);
    return { __typename: 'User', id: result.user_id, context };
  },

  __resolveReference: async ({ id }: { id: string }) => {
    console.log(id);
    return await Tweet.findByPk(id, { raw: true });
  },
};
