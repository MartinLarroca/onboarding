import Comment from '../models/comment';

export default {
  comments: async () => {
    const comments = await Comment.findAll({ raw: true });
    return comments;
  },
  comment: async (parent: any, args: any, context: any) => {
    const comments = await Comment.findByPk(args.id, { raw: true });
    return comments;
  },
};
