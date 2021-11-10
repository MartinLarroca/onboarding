import { Model, DataTypes } from 'sequelize';

import Database from './index';

interface CommentAttributes {
  id: number;
  comment: string;
}

class Comment extends Model<CommentAttributes> implements CommentAttributes {
  id!: number;
  comment!: string;
}

Database.sequelize.define('comment', {
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
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  tweet_id: {
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
});

export default Comment;
