import { User } from '../models/user';
import { Context } from '../interfaces/context';

export default {
  users: async () => await User.findAll(),
  user: async (parent: any, args: any, context: Context) =>
    await User.findByPk(args.id),
};
