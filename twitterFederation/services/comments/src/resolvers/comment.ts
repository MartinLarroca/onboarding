export default {
  user: async ({ id }: { id: string }, args: any, context: any) => {
    return context.CommentsUserReferenceLoader.load(id);
  },

  tweet: async ({ id }: { id: string }, args: any, context: any) => {
    return context.CommentsTweetReferenceLoader.load(id);
  },
};
