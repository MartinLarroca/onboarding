export default {
  user: async ({ id }: { id: string }, args: any, context: any) =>
    context.CommentsUserReferenceLoader.load(id),

  tweet: async ({ id }: { id: string }, args: any, context: any) =>
    context.CommentsTweetReferenceLoader.load(id),
};
