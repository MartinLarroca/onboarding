import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  user: async (comment: Comment) => {
    return await User.findByPk(comment.user_id);
  },

  tweet: async (comment: Comment) => {
    return await Tweet.findByPk(comment.tweet_id);
  },
};
