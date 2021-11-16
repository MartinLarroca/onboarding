import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import { CommentInterface, Comment } from '../models/comment';

enum DataLoaderType {
  User,
  Tweet,
  UserReference,
  TweetReference,
}

const commentsByUsersIds: any = async (ids: string[]) => {
  const comments = await Comment.findAll({
    where: { user_id: ids },
    raw: true,
  });
  const groupedComments = groupBy((elem) => elem.user_id, comments);
  const result: CommentInterface[][] = [];
  ids.forEach((id) => result.push(groupedComments[id]));
  return result;
};

const commentsByTweetsIds: any = async (ids: string[]) => {
  const comments = await Comment.findAll({
    where: { tweet_id: ids },
    raw: true,
  });
  const groupedComments = groupBy((elem) => elem.tweet_id.toString(), comments);
  const result: CommentInterface[][] = [];
  ids.forEach((id) => result.push(groupedComments[id]));
  return result;
};

const commentsUserReference: any = async (ids: string[]) => {
  const result: any = [];
  const comments = await Comment.findAll({
    where: { id: ids },
    raw: true,
  });
  const groupedComments = groupBy((elem) => elem.tweet_id.toString(), comments);
  ids.forEach((id) =>
    result.push({ __typename: 'User', id: groupedComments[id][0].user_id })
  );
  return result;
};

const commentsTweetReference: any = async (ids: string[]) => {
  const result: any = [];
  const comments = await Comment.findAll({
    where: { id: ids },
    raw: true,
  });
  const groupedComments = groupBy((elem) => elem.tweet_id.toString(), comments);
  ids.forEach((id) =>
    result.push({ __typename: 'Tweet', id: groupedComments[id][0].tweet_id })
  );
  return result;
};

const create = (value: DataLoaderType) => {
  switch (value) {
    case DataLoaderType.User:
      return new DataLoader(commentsByUsersIds);
    case DataLoaderType.Tweet:
      return new DataLoader(commentsByTweetsIds);
    case DataLoaderType.UserReference:
      return new DataLoader(commentsUserReference);
    case DataLoaderType.TweetReference:
      return new DataLoader(commentsTweetReference);
  }
};

export { create, DataLoaderType };
