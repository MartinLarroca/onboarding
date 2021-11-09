import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  addUser: async (_: any, data: any) => {
    const user = await User.create(data.user);
    return user;
  },
  updateUser: async (_: any, data: any) => {
    const { id, ...user_data } = data.user;
    await User.update(user_data, { where: { id } });
    return await User.findByPk(id, { raw: true });
  },
  deleteUser: async (_: any, data: any) => {
    const elim = await User.destroy({ where: { id: data.id } });
    return data.id;
  },
  addComment: async (_: any, data: any) => {
    const comment = await Comment.create(data.comment);
    return comment;
  },
  updateComment: async (_: any, data: any) => {
    const { id, ...comment_data } = data.comment;
    await Comment.update(comment_data, { where: { id } });
    return await Comment.findByPk(id, { raw: true });
  },
  deleteComment: async (_: any, data: any) => {
    const elim = await Comment.destroy({ where: { id: data.id } });
    return data.id;
  },
  addTweet: async (_: any, data: any) => {
    const tweet = await Tweet.create(data.tweet);
    return tweet;
  },
  updateTweet: async (_: any, data: any) => {
    const { id, ...tweet_data } = data.tweet;
    await Tweet.update(tweet_data, { where: { id } });
    return await Tweet.findByPk(id, { raw: true });
  },
  deleteTweet: async (_: any, data: any) => {
    const elim = await Tweet.destroy({ where: { id: data.id } });
    return data.id;
  },
};
