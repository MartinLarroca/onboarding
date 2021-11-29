import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    tweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
`;
