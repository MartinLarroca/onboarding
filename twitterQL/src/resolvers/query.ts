import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  users: async () => {
    const users = await User.findAll({ raw: true });
    return users;
  },

  tweets: async () => {
    const tweets = await Tweet.findAll({ raw: true });
    return tweets;
  },

  comments: async () => {
    const comments = await Comment.findAll({ raw: true });
    return comments;
  },

  user: async (_: any, data: any) => {
    const users = await User.findByPk(data.id, { raw: true });
    return users;
  },

  tweet: async (_: any, data: any) => {
    const tweets = await Tweet.findByPk(data.id, { raw: true });
    return tweets;
  },

  comment: async (_: any, data: any) => {
    const comments = await Comment.findByPk(data.id, { raw: true });
    return comments;
  },
};
