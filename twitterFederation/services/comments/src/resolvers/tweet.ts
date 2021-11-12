import Comment from '../models/comment';

export default {
  comments: async ({ __typename, id }: { __typename: string; id: string }) => {
    return await Comment.findAll({
      where: { tweet_id: id },
      raw: true,
    });
  },
};