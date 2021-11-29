import { Comment } from '../models/comment';

export default {
  comments: async () => await Comment.findAll(),
  comment: async (parent: any, args: any, context: any) =>
    await Comment.findByPk(args.id),
};
