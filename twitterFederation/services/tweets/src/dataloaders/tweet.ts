import { groupBy } from 'ramda';
import DataLoader from 'dataloader';
import { TweetInterface, Tweet } from '../models/tweet';

enum DataLoaderType {
  User,
  Reference,
  UserReference,
}

const tweetsByIds: any = async (ids: string[]) => {
  const tweets = await Tweet.findAll({ where: { id: ids }, raw: true });
  const groupedTweets = groupBy((tweet) => tweet.id.toString(), tweets);
  const result: TweetInterface[] = [];
  ids.forEach((id) => result.push(groupedTweets[id.toString()][0]));
  return result;
};

const tweetsByUsersIds: any = async (ids: string[]) => {
  const tweets = await Tweet.findAll({ where: { user_id: ids }, raw: true });
  const groupedTweets = groupBy((tweet) => tweet.user_id, tweets);
  const result: TweetInterface[][] = [];
  ids.forEach((id) => result.push(groupedTweets[id]));
  return result;
};

const tweetsUserReference: any = async (ids: string[]) => {
  const result: any = [];
  const tweets = await Tweet.findAll({
    where: { id: ids },
    raw: true,
  });
  const groupedTweets = groupBy((elem) => elem.id.toString(), tweets);
  ids.forEach((id) =>
    result.push({ __typename: 'User', id: groupedTweets[id][0].user_id })
  );
  return result;
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
