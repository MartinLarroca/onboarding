export default {
  __resolveReference: ({ id }: { id: string }, context: any) =>
    context.usersLoader.load(id),
};
