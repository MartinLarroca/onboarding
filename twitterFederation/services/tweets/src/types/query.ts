import { gql } from 'apollo-server';

export default gql`
  type Query {
    tweets: [Tweet]
    tweet(id: Int!): Tweet
  }
`;
