import { gql } from 'apollo-server';

export default gql`
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

  extend type Mutation {
    addUser(user: CreateUserInput): User
    updateUser(user: UpdateUserInput): User
    deleteUser(id: ID!): User
  }
`;
