import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    addTweet(tweet: CreateTweetInput): Tweet
    updateTweet(tweet: UpdateTweetInput): Tweet
    deleteTweet(id: Int): Int
  }
`;
