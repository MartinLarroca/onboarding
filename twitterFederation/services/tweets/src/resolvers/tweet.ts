export default {
  user: async ({ id }: { id: string }, args: any, context: any) =>
    context.TweetsUserReferenceLoader.load(id),

  __resolveReference: ({ id }: { id: string }, context: any) =>
    context.ResolveReferenceLoader.load(id),
};
