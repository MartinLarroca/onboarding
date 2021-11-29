import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    comments: [Comment!]!
    comment(id: ID!): Comment
  }
`;
