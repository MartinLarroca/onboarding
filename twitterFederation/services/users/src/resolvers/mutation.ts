import { User } from '../models/user';

export default {
  addUser: async (_: any, data: any) => await User.create(data.user),

  updateUser: async (_: any, { user: { id, ...user_data } }: { user: any }) => {
    const user = await User.findByPk(id);
    return await user.update(user_data);
  },

  deleteUser: async (_: any, { id }: { id: string }) => {
    const user = await User.findByPk(id);
    return await user.destroy();
  },
};
