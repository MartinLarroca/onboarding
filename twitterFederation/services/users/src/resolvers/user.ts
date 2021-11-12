export default {
  __resolveReference: ({ id }: { id: string }, context: any) => {
    console.log(context);
    return context.usersLoader.load(id);
  },
};
