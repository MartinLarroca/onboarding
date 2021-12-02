import { Context } from '../interfaces/context';

export default {
  __resolveReference: ({ id }: { id: string }, context: Context) =>
    context.usersLoader.load(id),
};
