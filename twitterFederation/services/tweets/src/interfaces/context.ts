import DataLoader from 'dataloader';
import { Tweet } from '../models/tweet';

interface Context {
  ResolveReferenceLoader:
    | DataLoader<string, Tweet, string>
    | DataLoader<string, Tweet[], string>
    | DataLoader<string, { __typename: string; id: string }, string>;
  TweetsGivenUserLoader:
    | DataLoader<string, Tweet, string>
    | DataLoader<string, Tweet[], string>
    | DataLoader<string, { __typename: string; id: string }, string>;
  TweetsUserReferenceLoader:
    | DataLoader<string, Tweet, string>
    | DataLoader<string, Tweet[], string>
    | DataLoader<string, { __typename: string; id: string }, string>;
}

export { Context };
