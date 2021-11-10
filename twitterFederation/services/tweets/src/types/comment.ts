import { gql } from 'apollo-server';

export default gql`
  extend type Comment {
    tweet: Tweet
  }
`;
