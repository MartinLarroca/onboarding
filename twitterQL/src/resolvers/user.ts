import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  tweets: async (user: User) => {
    const tweets = await Tweet.findAll({
      where: { user_id: user.id },
    });
    return tweets;
  },

  comments: async (user: User) => {
    const comments = await Comment.findAll({
      where: { user_id: user.id },
    });
    return comments;
  },
};
