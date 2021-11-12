import { gql } from 'apollo-server';

export default gql`
  type User @key(fields: "id") {
    id: ID!
    name: String!
    surname: String!
    email: String!
    createdAt: Date
    updatedAt: Date
  }

  input CreateUserInput {
    name: String!
    surname: String!
    email: String!
  }

  input UpdateUserInput {
    id: ID!
    name: String
    surname: String
    email: String
  }
`;
