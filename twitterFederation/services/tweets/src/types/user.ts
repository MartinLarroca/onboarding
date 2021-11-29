import { gql } from 'apollo-server';

export default gql`
  extend type User @key(fields: "id") {
    id: ID! @external
    tweets: [Tweet!]!
  }
`;
