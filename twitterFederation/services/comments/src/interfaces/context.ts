import DataLoader from 'dataloader';
import { Comment } from '../models/comment';

interface Context {
  CommentsGivenUserLoader:
    | DataLoader<string, Comment[], string>
    | DataLoader<string, { __typename: string; id: string }, string>
    | DataLoader<string, { __typename: string; id: number }, string>;
  CommentsGivenTweetLoader:
    | DataLoader<string, Comment[], string>
    | DataLoader<string, { __typename: string; id: string }, string>
    | DataLoader<string, { __typename: string; id: number }, string>;
  CommentsUserReferenceLoader:
    | DataLoader<string, Comment[], string>
    | DataLoader<string, { __typename: string; id: string }, string>
    | DataLoader<string, { __typename: string; id: number }, string>;
  CommentsTweetReferenceLoader:
    | DataLoader<string, Comment[], string>
    | DataLoader<string, { __typename: string; id: string }, string>
    | DataLoader<string, { __typename: string; id: number }, string>;
}

export { Context };
