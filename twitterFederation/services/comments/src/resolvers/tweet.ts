export default {
  comments: async ({ id }: { id: string }, args: any, context: any) =>
    context.CommentsGivenTweetLoader.load(id),
};
