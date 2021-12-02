import { Database } from "../models/index";

const create = async (body: any) => {
  try {
    const tweet = await Database.tweets.create(body);
    return tweet;
  } catch (err) {
    return { message: err };
  }
};

const findAll = async () => {
  try {
    const tweets = await Database.tweets.findAll();
    return tweets;
  } catch (err) {
    return { message: err };
  }
};

const findOne = async (id: string) => {
  try {
    const tweet = await Database.tweets.findByPk(id);
    return tweet == null ? { message: `Id ${id} is not valid.` } : tweet;
  } catch (err) {
    return { message: err };
  }
};

const update = async (body: any, id: string) => {
  try {
    await Database.tweets.update(body, { where: { id } });
    const tweet = await Database.tweets.findByPk(id);
    return tweet == null ? { message: `Id ${id} is not valid.` } : tweet;
  } catch (err) {
    return { message: err };
  }
};

const del = async (id: string) => {
  try {
    const elim = await Database.tweets.destroy({ where: { id } });
    return elim == 0
      ? { message: `Id ${id} is not valid.` }
      : { success: "Tweet deleted successfully." };
  } catch (err) {
    return { message: err };
  }
};

const tweetsController = { create, findAll, findOne, update, del };

export default tweetsController;
