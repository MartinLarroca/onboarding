import Comment from '../models/comment';

export default {
  comments: async () => {
    const comments = await Comment.findAll();
    return comments;
  },
  comment: async (parent: any, args: any, context: any) => {
    const comments = await Comment.findByPk(args.id);
    return comments;
  },
};
