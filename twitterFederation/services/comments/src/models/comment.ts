import { Model, DataTypes } from 'sequelize';

import Database from '../db/database';

interface CommentAttributes {
  id: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  tweetId: number;
}

class Comment extends Model<CommentAttributes> implements CommentAttributes {
  id!: number;
  comment!: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  tweetId: number;
}

const comment = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  tweetId: {
    type: DataTypes.INTEGER.UNSIGNED,
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

Comment.init(comment, { modelName: 'Comment', sequelize: Database.sequelize });

export { Comment, CommentAttributes as CommentInterface };
