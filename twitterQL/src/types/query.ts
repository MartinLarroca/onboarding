import { gql } from 'apollo-server';

export default gql`
  type Query {
    users: [User]
    tweets: [Tweet]
    comments: [Comment]
    user(userId: String!): User
    comment(commentId: Int!): Comment
    tweet(tweetId: Int!): Tweet
  }
`;
