import User from '../models/user';

export default {
  users: async () => await User.findAll(),
  user: async (parent: any, args: any, context: any) =>
    await User.findByPk(args.id),
};
