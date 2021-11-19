import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  user: async (tweet: Tweet) => {
    const user = await User.findByPk(tweet.user_id);
    return user;
  },

  comments: async (tweet: Tweet) => {
    const comments = await Comment.findAll({
      where: { tweet_id: tweet.id },
    });
    return comments;
  },
};
