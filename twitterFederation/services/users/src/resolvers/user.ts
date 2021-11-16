export default {
  __resolveReference: ({ id }: { id: string }, context: any) => {
    return context.usersLoader.load(id);
  },
};
