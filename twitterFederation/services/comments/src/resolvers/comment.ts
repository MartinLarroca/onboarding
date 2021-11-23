import Comment from '../models/comment';

export default {
  user: async (comment: Comment) => {
    const result = await Comment.findByPk(comment.id);
    return { __typename: 'User', id: result.user_id };
  },

  tweet: async (comment: Comment) => {
    const result = await Comment.findByPk(comment.id);
    return { __typename: 'Tweet', id: result.tweet_id };
  },
};
