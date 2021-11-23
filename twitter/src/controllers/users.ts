import { Database } from "../models/index";

import { v4 as uuidv4 } from "uuid";

const create = async (body: any) => {
  try {
    body.id = uuidv4();
    const user = await Database.users.create(body);
    return user;
  } catch (err) {
    return { message: err };
  }
};

const findAll = async () => {
  try {
    const users = await Database.users.findAll();
    return users;
  } catch (err) {
    return { message: err };
  }
};

const findOne = async (id: string) => {
  try {
    const user = await Database.users.findByPk(id);
    return user == null ? { message: `Id ${id} is not valid.` } : user;
  } catch (err) {
    return { message: err };
  }
};

const update = async (body: any, id: string) => {
  try {
    await Database.users.update(body, { where: { id } });
    const user = await Database.users.findByPk(id);
    return user == null ? { message: `Id ${id} is not valid.` } : user;
  } catch (err) {
    return { message: err };
  }
};

const del = async (id: string) => {
  try {
    const elim = await Database.users.destroy({ where: { id } });
    return elim == 0
      ? { message: `Id ${id} is not valid.` }
      : { success: "User deleted successfully." };
  } catch (err) {
    return { message: err };
  }
};

const usersController = { create, findAll, findOne, update, del };

export default usersController;
