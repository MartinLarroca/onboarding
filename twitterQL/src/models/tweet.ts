import { Model, DataTypes } from 'sequelize';

import Database from '../db/config/database';

interface TweetAttributes {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  user_id: string;
}

class Tweet extends Model<TweetAttributes> implements TweetAttributes {
  id!: number;
  text!: string;
  createdAt: Date;
  updatedAt: Date;
  user_id: string;
}

const tweet = {
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
};

Tweet.init(tweet, { modelName: 'Tweet', sequelize: Database.sequelize });

export = Tweet;
