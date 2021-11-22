import User from '../models/user';
import Tweet from '../models/tweet';
import Comment from '../models/comment';

export default {
  user: async (tweet: Tweet) => {
    console.log('DSAdasadsadsd');
    const user = await User.findByPk(tweet.user_id, { raw: true });
    console.log(user);
    console.log('dasdasadsdasadsads');
    return user;
  },

  comments: async (tweet: Tweet) => {
    const comments = await Comment.findAll({
      where: { tweet_id: tweet.id },
      raw: true,
    });
    return comments;
  },
};
