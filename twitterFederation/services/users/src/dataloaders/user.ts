import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import User from '../models/user';

interface Usr {
  name: string;
  surname: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

const usersByIds: any = async (ids: string[]) => {
  const users = await User.findAll({ where: { id: ids }, raw: true });
  const groupedUsers = groupBy((user) => user.id, users);
  const result: Usr[] = [];
  ids.forEach((id) => result.push(groupedUsers[id][0]));
  return result;
};

export default { create: () => new DataLoader(usersByIds) };
