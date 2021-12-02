import { Comment } from '../models/comment';
import { Context } from '../interfaces/context';

export default {
  comments: async () => await Comment.findAll(),
  comment: async (parent: any, args: any, context: Context) =>
    await Comment.findByPk(args.id),
};
