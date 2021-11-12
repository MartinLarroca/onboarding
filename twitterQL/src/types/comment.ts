import { gql } from 'apollo-server';

export default gql`
  type Comment {
    id: ID!
    user_id: ID!
    tweet_id: ID!
    comment: String!
    createdAt: Date
    updatedAt: Date
  }
`;
