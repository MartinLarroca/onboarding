import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  tweets: async (user: User) => {
    return await Tweet.findAll({
      where: { user_id: user.id },
    });
  },

  comments: async (user: User) => {
    return await Comment.findAll({
      where: { user_id: user.id },
    });
  },
};
