import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    users: [User]
    user(id: String!): User
  }
`;
