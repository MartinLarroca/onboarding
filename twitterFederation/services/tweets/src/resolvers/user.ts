import { Context } from '../interfaces/context';

export default {
  tweets: async ({ id }: { id: string }, args: any, context: Context) =>
    context.TweetsGivenUserLoader.load(id),
};
