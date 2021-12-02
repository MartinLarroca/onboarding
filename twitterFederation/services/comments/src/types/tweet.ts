import { gql } from 'apollo-server';

export default gql`
  extend type Tweet @key(fields: "id") {
    id: ID! @external
    comments: [Comment!]!
  }
`;
