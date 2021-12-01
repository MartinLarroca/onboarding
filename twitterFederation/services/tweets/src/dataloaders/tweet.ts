import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import { Tweet } from '../models/tweet';

enum DataLoaderType {
  User,
  Reference,
  UserReference,
}

const tweetsByIds = async (ids: string[]) => {
  const tweets = await Tweet.findAll({ where: { id: ids } });
  const groupedTweets = groupBy((tweet) => tweet.id.toString(), tweets);
  return ids.map((id) => groupedTweets[id.toString()][0]);
};

const tweetsByUsersIds = async (ids: string[]) => {
  const tweets = await Tweet.findAll({ where: { userId: ids } });
  const groupedTweets = groupBy((tweet) => tweet.userId, tweets);
  return ids.map((id) => (groupedTweets[id] == null ? [] : groupedTweets[id]));
};

const tweetsUserReference = async (ids: string[]) => {
  const tweets = await Tweet.findAll({ where: { id: ids } });
  const groupedTweets = groupBy((elem) => elem.id.toString(), tweets);
  return ids.map((id) => {
    return { __typename: 'User', id: groupedTweets[id][0].userId };
  });
};

const create = (value: DataLoaderType) => {
  switch (value) {
    case DataLoaderType.Reference:
      return new DataLoader(tweetsByIds);
    case DataLoaderType.User:
      return new DataLoader(tweetsByUsersIds);
    case DataLoaderType.UserReference:
      return new DataLoader(tweetsUserReference);
  }
};

export { create, DataLoaderType };
