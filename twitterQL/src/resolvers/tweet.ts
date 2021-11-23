import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  user: async (tweet: Tweet) => {
    return await User.findByPk(tweet.user_id);
  },

  comments: async (tweet: Tweet) => {
    return await Comment.findAll({
      where: { tweet_id: tweet.id },
    });
  },
};
