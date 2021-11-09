import { Model, DataTypes } from 'sequelize';

import Database from './index';

interface TweetAttributes {
  id: number;
  text: string;
}

class Tweet extends Model<TweetAttributes> implements TweetAttributes {
  id!: number;
  text!: string;
}

Database.sequelize.define('tweet', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Tweet;
