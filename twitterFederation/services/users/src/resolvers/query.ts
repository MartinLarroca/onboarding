import User from '../models/user';

export default {
  users: async () => {
    const users = await User.findAll({ raw: true });
    console.log(users);
    return users;
  },
  user: async (parent: any, args: any, context: any) => {
    const users = await User.findByPk(args.id, { raw: true });
    console.log(users);
    return users;
  },
};
