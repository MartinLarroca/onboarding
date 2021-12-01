import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import { Comment } from '../models/comment';

enum DataLoaderType {
  User,
  Tweet,
  UserReference,
  TweetReference,
}

const commentsByUsersIds = async (ids: string[]) => {
  const comments = await Comment.findAll({ where: { userId: ids } });
  const groupedComments = groupBy((elem) => elem.userId, comments);
  return ids.map((id) =>
    groupedComments[id] == null ? [] : groupedComments[id]
  );
};

const commentsByTweetsIds = async (ids: string[]) => {
  const comments = await Comment.findAll({ where: { tweetId: ids } });
  const groupedComments = groupBy((elem) => elem.tweetId.toString(), comments);
  return ids.map((id) =>
    groupedComments[id] == null ? [] : groupedComments[id]
  );
};

const commentsUserReference = async (ids: string[]) => {
  const comments = await Comment.findAll({ where: { id: ids } });
  const groupedComments = groupBy((elem) => elem.tweetId.toString(), comments);
  return ids.map((id) => ({
    __typename: 'User',
    id: groupedComments[id][0].userId,
  }));
};

const commentsTweetReference = async (ids: string[]) => {
  const comments = await Comment.findAll({ where: { id: ids } });
  const groupedComments = groupBy((elem) => elem.tweetId.toString(), comments);
  return ids.map((id) => ({
    __typename: 'Tweet',
    id: groupedComments[id][0].tweetId,
  }));
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
