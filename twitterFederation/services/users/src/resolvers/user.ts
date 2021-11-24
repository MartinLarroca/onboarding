import User from '../models/user';

export default {
  __resolveReference: async ({ id }: { id: string }) => await User.findByPk(id),
};
