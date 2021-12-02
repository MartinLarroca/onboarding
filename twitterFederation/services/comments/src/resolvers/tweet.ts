import { Context } from '../interfaces/context';

export default {
  comments: async ({ id }: { id: string }, args: any, context: Context) =>
    context.CommentsGivenTweetLoader.load(id),
};
