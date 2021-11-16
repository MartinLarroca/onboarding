import { User } from '../models/user';

export default {
  users: async () => {
    const users = await User.findAll({ raw: true });
    return users;
  },
  user: async (parent: any, args: any, context: any) => {
    const users = await User.findByPk(args.id, { raw: true });
    return users;
  },
};
