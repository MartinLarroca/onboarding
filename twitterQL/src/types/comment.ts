import { gql } from 'apollo-server';

export default gql`
  type Comment {
    id: ID!
    user_id: ID!
    tweet_id: ID!
    comment: String!
    createdAt: Date
    updatedAt: Date
    tweet: Tweet
    user: User
  }

  input CreateCommentInput {
    user_id: ID!
    tweet_id: ID!
    comment: String!
  }

  input UpdateCommentInput {
    id: ID!
    comment: String!
  }
`;
