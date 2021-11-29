export default {
  user: async ({ id }: { id: string }, args: any, context: any) => {
    return await context.TweetsUserReferenceLoader.load(id);
  },

  __resolveReference: ({ id }: { id: string }, context: any) => {
    return context.ResolveReferenceLoader.load(id);
  },
};
