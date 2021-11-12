import User from '../models/user';

export default {
  __resolveReference: async ({ id }: { id: string }) => {
    console.log(id);
    return await User.findByPk(id, { raw: true });
  },
};
