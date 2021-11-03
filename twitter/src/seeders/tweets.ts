import users from './users';

const tweet1 = {
  text: 'ta nublado',
  user_id: users.user1.id
}

const tweet2 = {
  text: 'probando',
  user_id: users.user2.id
}

const tweet3 = {
  text: 'hi',
  user_id: users.user2.id
};

const tweets = {tweet1, tweet2, tweet3};

export = tweets;