import { gql } from 'apollo-server';

export default gql`
  type User {
    id: ID!
    name: String!
    surname: String!
    email: String!
    createdAt: String
    updatedAt: String
    comments: [Comment]
    tweets: [Tweet]
  }
`;
