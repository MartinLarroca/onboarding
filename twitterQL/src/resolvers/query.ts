import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  users: async () => {
    return await User.findAll();
  },

  tweets: async () => {
    return await Tweet.findAll();
  },

  comments: async () => {
    return await Comment.findAll();
  },

  user: async (_: any, data: any) => {
    return await User.findByPk(data.id);
  },

  tweet: async (_: any, data: any) => {
    return await Tweet.findByPk(data.id);
  },

  comment: async (_: any, data: any) => {
    return await Comment.findByPk(data.id);
  },
};
