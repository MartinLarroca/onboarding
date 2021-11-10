import user from './user';
import tweet from './tweet';
import comment from './comment';
import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    addTweet(user: CreateTweetInput): Tweet
    updateTweet(user: UpdateTweetInput): Tweet
    deleteTweet(id: Int): Int
  }
`;
