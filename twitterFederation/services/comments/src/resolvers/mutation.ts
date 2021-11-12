import Comment from '../models/comment';

export default {
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
};
