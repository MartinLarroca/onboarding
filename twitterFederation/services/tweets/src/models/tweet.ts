import { Model, DataTypes } from 'sequelize';

import Database from '../db/database';

interface TweetAttributes {
  id: number;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
}

class Tweet extends Model<TweetAttributes> implements TweetAttributes {
  id!: number;
  text!: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
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
  userId: {
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
