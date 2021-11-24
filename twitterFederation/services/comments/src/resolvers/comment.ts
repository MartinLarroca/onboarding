import Comment from '../models/comment';

export default {
  user: async (comment: Comment) => {
    const { userId } = await Comment.findByPk(comment.id);
    return { __typename: 'User', id: userId };
  },

  tweet: async (comment: Comment) => {
    const { tweetId } = await Comment.findByPk(comment.id);
    return { __typename: 'Tweet', id: tweetId };
  },
};
