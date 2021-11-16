export default {
  comments: async ({ id }: { id: string }, args: any, context: any) => {
    return context.CommentsGivenUserLoader.load(id);
  },
};
