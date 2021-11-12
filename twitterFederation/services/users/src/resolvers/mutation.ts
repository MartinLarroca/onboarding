import User from '../models/user';

export default {
  addUser: async (_: any, data: any) => {
    const user = await User.create(data.user);
    return user;
  },
  updateUser: async (_: any, data: any) => {
    const { id, ...user_data } = data.user;
    await User.update(user_data, { where: { id } });
    return await User.findByPk(id, { raw: true });
  },
  deleteUser: async (_: any, data: any) => {
    const elim = await User.destroy({ where: { id: data.id } });
    return data.id;
  },
};
