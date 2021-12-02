import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import { User } from '../models/user';

const usersByIds = async (ids: string[]) => {
  const users = await User.findAll({ where: { id: ids } });
  const groupedUsers = groupBy((user) => user.id, users);
  return ids.map((id) => groupedUsers[id][0]);
};

export default { create: () => new DataLoader(usersByIds) };
