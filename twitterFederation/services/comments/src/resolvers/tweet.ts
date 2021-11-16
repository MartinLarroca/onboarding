export default {
  comments: async ({ id }: { id: string }, args: any, context: any) => {
    return context.CommentsGivenTweetLoader.load(id);
  },
};
