import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  user: async (comment: Comment) => {
    const user = await User.findByPk(comment.user_id, { raw: true });
    return user;
  },

  tweet: async (comment: Comment) => {
    const tweet = await Tweet.findByPk(comment.tweet_id, { raw: true });
    return tweet;
  },
};
