import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  addUser: async (_: any, data: any) => {
    return await User.create(data.user);
  },
  updateUser: async (_: any, data: any) => {
    const { id, ...user_data } = data.user;
    await User.update(user_data, { where: { id } });
    return await User.findByPk(id);
  },
  deleteUser: async (_: any, data: any) => {
    await User.destroy({ where: { id: data.id } });
    return data.id;
  },
  addComment: async (_: any, data: any) => {
    return await Comment.create(data.comment);
  },
  updateComment: async (_: any, data: any) => {
    const { id, ...comment_data } = data.comment;
    await Comment.update(comment_data, { where: { id } });
    return await Comment.findByPk(id);
  },
  deleteComment: async (_: any, data: any) => {
    await Comment.destroy({ where: { id: data.id } });
    return data.id;
  },
  addTweet: async (_: any, data: any) => {
    return await Tweet.create(data.tweet);
  },
  updateTweet: async (_: any, data: any) => {
    const { id, ...tweet_data } = data.tweet;
    await Tweet.update(tweet_data, { where: { id } });
    return await Tweet.findByPk(id);
  },
  deleteTweet: async (_: any, data: any) => {
    await Tweet.destroy({ where: { id: data.id } });
    return data.id;
  },
};
