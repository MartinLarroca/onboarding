import { gql } from 'apollo-server';

export default gql`
  input CreateCommentInput {
    userId: ID!
    tweetId: ID!
    comment: String!
  }

  input UpdateCommentInput {
    id: ID!
    comment: String!
  }

  type Mutation {
    addComment(comment: CreateCommentInput): Comment
    updateComment(comment: UpdateCommentInput): Comment
    deleteComment(id: ID!): Comment
  }
`;
