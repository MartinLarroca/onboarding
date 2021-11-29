import Comment from '../models/comment';

export default {
  comments: async ({ __typename, id }: { __typename: string; id: string }) =>
    await Comment.findAll({
      where: { tweetId: id },
    }),
};
