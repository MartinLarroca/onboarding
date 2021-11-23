import User from '../models/user';

export default {
  users: async () => {
    const users = await User.findAll();
    console.log(users);
    return users;
  },
  user: async (parent: any, args: any, context: any) => {
    const users = await User.findByPk(args.id);
    console.log(users);
    return users;
  },
};
