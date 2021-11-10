import Tweet from '../models/tweet';

export default {
  tweets: async (user: any) => {
    return await Tweet.findAll({
      where: { user_id: user.id },
      raw: true,
    });
  },
};
