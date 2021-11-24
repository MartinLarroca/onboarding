import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    addComment(comment: CreateCommentInput): Comment
    updateComment(comment: UpdateCommentInput): Comment
    deleteComment(id: ID!): ID
  }
`;
