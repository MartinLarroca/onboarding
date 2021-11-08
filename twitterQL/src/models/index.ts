import User from "./user";
import Tweet from "./tweet";
import Comment from "./comment";

import Database from "../db/config/database";

const models = { User, Tweet, Comment };

Database.users = User;
Database.tweets = Tweet;
Database.comments = Comment;

Comment.belongsTo(models.User, { foreignKey: { name: "user_id" } });
Comment.belongsTo(models.Tweet, { foreignKey: { name: "tweet_id" } });

User.hasMany(models.Tweet, { foreignKey: { name: "user_id" } });
User.hasMany(models.Comment, { foreignKey: { name: "user_id" } });

Tweet.belongsTo(models.User, { foreignKey: { name: "user_id" } });
Tweet.hasMany(models.Comment, { foreignKey: { name: "tweet_id" } });

export default Database; // this database after being set up
