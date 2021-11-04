import { Database } from "../models/index";

const create = async (body: any) => {
  try {
    const comment = await Database.comments.create(body);
    return comment;
  } catch (err) { return { message: err }}
};

const findAll = async () => {
  try {
    const comments = await Database.comments.findAll({raw: true});
    return comments;
  } catch (err) { return {message : err }}
};

const findOne = async (id: string) => {
  try {
    const comment = await Database.comments.findByPk(id, {raw: true});
    return comment == null? { message: `Id ${id} is not valid.` } : comment
  } catch (err) { return { message: err }}
};

const update = async (body: any, id: string) => {
  try {
    await Database.comments.update(body, { where: { id } });
    const comment = await Database.comments.findByPk(id, {raw: true});
    return comment == null? { message: `Id ${id} is not valid.` } : comment
  } catch (err) { return { message: err }}
};

const del = async (id: string) => {
  try {
    const elim = await Database.comments.destroy({ where: {id}});
    return elim == 0? { message: `Id ${id} is not valid.` } : { success: "Comment deleted successfully." }
  } catch (err) { return { message : err }}
};

const commentsController = { create, findAll, findOne, update, del };

export default commentsController;