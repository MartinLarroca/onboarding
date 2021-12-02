import { Context } from '../interfaces/context';

export default {
  user: async ({ id }: { id: string }, args: any, context: Context) =>
    context.CommentsUserReferenceLoader.load(id),

  tweet: async ({ id }: { id: string }, args: any, context: Context) =>
    context.CommentsTweetReferenceLoader.load(id),
};
