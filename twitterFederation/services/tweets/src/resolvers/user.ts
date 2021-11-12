import Tweet from '../models/tweet';

export default {
  tweets: async ({ __typename, id }: { __typename: string; id: string }) => {
    return await Tweet.findAll({
      where: { user_id: id },
      raw: true,
    });
  },
};
