import { Context } from '../interfaces/context';

export default {
  user: async ({ id }: { id: string }, args: any, context: Context) =>
    context.TweetsUserReferenceLoader.load(id),

  __resolveReference: ({ id }: { id: string }, context: Context) =>
    context.ResolveReferenceLoader.load(id),
};
