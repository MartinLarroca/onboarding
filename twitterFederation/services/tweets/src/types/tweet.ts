import { gql } from 'apollo-server';

export default gql`
  type Tweet @key(fields: "id") {
    id: ID!
    user_id: ID!
    text: String!
    createdAt: Date
    updatedAt: Date
  }

  input CreateTweetInput {
    user_id: ID!
    text: String!
  }

  input UpdateTweetInput {
    id: ID!
    text: String!
  }
`;
