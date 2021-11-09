import { gql } from 'apollo-server';

export default gql`
  type Tweet {
    id: ID!
    user_id: ID!
    text: String!
    createdAt: Date
    updatedAt: Date
    user: User
    comments: [Comment]
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
