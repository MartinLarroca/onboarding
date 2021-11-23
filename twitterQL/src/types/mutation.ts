import user from './user';
import tweet from './tweet';
import comment from './comment';
import { gql } from 'apollo-server';

export default gql`
  type Mutation {
    addUser(user: CreateUserInput): User
    updateUser(user: UpdateUserInput): User
    deleteUser(id: String): String
    addComment(comment: CreateCommentInput): Comment
    updateComment(comment: UpdateCommentInput): Comment
    deleteComment(id: Int): Int
    addTweet(user: CreateTweetInput): Tweet
    updateTweet(user: UpdateTweetInput): Tweet
    deleteTweet(id: Int): Int
  }
`;
