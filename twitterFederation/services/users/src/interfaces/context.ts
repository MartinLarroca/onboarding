import DataLoader from 'dataloader';
import { User } from '../models/user';

interface Context {
  usersLoader: DataLoader<string, User, string>;
}

export { Context };
