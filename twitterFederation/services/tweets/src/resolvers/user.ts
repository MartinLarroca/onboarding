export default {
  tweets: async ({ id }: { id: string }, args: any, context: any) => {
    return context.TweetsGivenUserLoader.load(id);
  },
};
