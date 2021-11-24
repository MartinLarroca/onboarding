import { gql } from 'apollo-server';

export default gql`
  extend type Mutation {
    addUser(user: CreateUserInput): User
    updateUser(user: UpdateUserInput): User
    deleteUser(id: ID!): ID
  }
`;
