import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import { User, UserInterface } from '../models/user';

const usersByIds: any = async (ids: string[]) => {
  const users = await User.findAll({ where: { id: ids }, raw: true });
  const groupedUsers = groupBy((user) => user.id, users);
  const result: UserInterface[] = [];
  ids.forEach((id) => result.push(groupedUsers[id][0]));
  return result;
};

export default { create: () => new DataLoader(usersByIds) };
