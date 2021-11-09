import { gql } from 'apollo-server';

export default gql`
  type Query {
    users: [User]
    tweets: [Tweet]
    comments: [Comment]
    user(id: String!): User
    comment(id: Int!): Comment
    tweet(id: Int!): Tweet
  }
`;
