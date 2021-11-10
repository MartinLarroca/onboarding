import Tweet from '../models/tweet';

export default {
  tweet: async (comment: any) => {
    return await Tweet.findByPk(comment.tweet_id, { raw: true });
  },
};
