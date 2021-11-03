import users from './users';

const comment1 = {
  comment: 'great tweet',
  user_id: users.user3.id,
  tweet_id: 1
};

const comment2 = {
  comment: 'another great tweet',
  user_id: users.user3.id,
  tweet_id: 2
};

const comments = {comment1, comment2};

export = comments;

