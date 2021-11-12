import { gql } from 'apollo-server';

export default gql`
  type Tweet {
    id: ID!
    user_id: ID!
    text: String!
    createdAt: Date
    updatedAt: Date
  }
`;
