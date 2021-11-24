import { gql } from 'apollo-server';

export default gql`
  type Comment {
    id: ID!
    userId: ID!
    tweetId: ID!
    comment: String!
    createdAt: Date
    updatedAt: Date
    tweet: Tweet
    user: User
  }

  input CreateCommentInput {
    userId: ID!
    tweetId: ID!
    comment: String!
  }

  input UpdateCommentInput {
    id: ID!
    comment: String!
  }
`;
