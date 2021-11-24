import { gql } from 'apollo-server';

export default gql`
  input CreateTweetInput {
    userId: ID!
    text: String!
  }

  input UpdateTweetInput {
    id: ID!
    text: String!
  }

  type Mutation {
    addTweet(tweet: CreateTweetInput): Tweet
    updateTweet(tweet: UpdateTweetInput): Tweet
    deleteTweet(id: ID!): ID
  }
`;
