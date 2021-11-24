import { gql } from 'apollo-server';

export default gql`
  type Tweet @key(fields: "id") {
    id: ID!
    userId: ID!
    text: String!
    createdAt: Date
    updatedAt: Date
    user: User
  }

  input CreateTweetInput {
    userId: ID!
    text: String!
  }

  input UpdateTweetInput {
    id: ID!
    text: String!
  }
`;
