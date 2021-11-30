export default {
  tweets: async ({ id }: { id: string }, args: any, context: any) =>
    context.TweetsGivenUserLoader.load(id),
};
