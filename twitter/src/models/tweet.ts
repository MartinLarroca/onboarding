import { Model, DataTypes } from 'sequelize';
import { Database } from '../config/database';

interface TweetAttributes {
  id: number;
  text: string;
}

class Tweet extends Model<TweetAttributes>
implements TweetAttributes {
  id!: number;
  text!: string;
};

const tweet = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  }
};

Tweet.init(tweet, { modelName: 'Tweet', sequelize: Database.sequelize });

export = Tweet;
