
import { Database } from "../models/index";

import { v4 as uuidv4 } from 'uuid';

const create = async (body: any) => {
  try {
    body.id = uuidv4();
    const user = await Database.users.create(body);
    return user;
  } catch (err) { return { message: err }}
};

const findAll = async () => {
  try {
    const users = await Database.users.findAll({raw: true});
    return users;
  } catch (err) { return {message : err }}
};

const findOne = async (id: string) => {
  try {
    const user = await Database.users.findByPk(id, {raw: true});
    return user;
  } catch (err) { return { message: err }}
};

const update = async (body: any, id: string) => {
  try {
    await Database.users.update(body, { where: { id } });
    const user = await Database.users.findByPk(id, {raw: true});
    return user;
  } catch (err) { return { message: err }}
};

const del = async (id: string) => {
  try {
    await Database.users.destroy({ where: {id}});
    return { message : "User deleted succesfully."};
  } catch (err) { return { message : err }}
};

const userController = { create, findAll, findOne, update, del };

export default userController;
