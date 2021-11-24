import User from '../models/user';

export default {
  addUser: async (_: any, data: any) => await User.create(data.user),
  updateUser: async (_: any, data: any) => {
    const { id, ...user_data } = data.user;
    const hola = await User.update(user_data, { where: { id } });
    console.log(hola);
    return await User.findByPk(id);
  },
  deleteUser: async (_: any, data: any) => {
    const elim = await User.destroy({ where: { id: data.id } });
    console.log(elim);
    return data.id;
  },
};
