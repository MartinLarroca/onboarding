import { Comment } from '../models/comment';

export default {
  addComment: async (_: any, { comment }: any) => await Comment.create(comment),

  updateComment: async (_: any, { com: { id, ...data } }: { com: any }) => {
    const comment = await Comment.findByPk(id);
    return await comment.update(data);
  },

  deleteComment: async (_: any, { id }: any) => {
    const comment = await Comment.findByPk(id);
    return await comment.destroy();
  },
};
