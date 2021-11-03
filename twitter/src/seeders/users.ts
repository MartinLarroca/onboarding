import { v4 as uuidv4 } from 'uuid';

const user1 = {
  id: uuidv4(),
  name: 'Martin',
  surname: 'Perez',
  email: 'martinlarrocafranco@gmail.com'
};

const user2 = {
  id: uuidv4(),
  name: 'Manuel',
  surname: 'Perez',
  email: 'manu1722@gmail.com'
};

const user3 = {
  id: uuidv4(),
  name: 'Francisco',
  surname: 'Marquez',
  email: 'fran1@gmail.com'
};

const users = {user1, user2, user3};

export = users;