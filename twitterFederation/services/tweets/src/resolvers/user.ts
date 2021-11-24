import Tweet from '../models/tweet';

export default {
  tweets: async ({ __typename, id }: { __typename: string; id: string }) =>
    await Tweet.findAll({
      where: { userId: id },
    }),
};
