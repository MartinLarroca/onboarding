import { Model, DataTypes } from 'sequelize';
import { Database } from '../config/database';

interface CommentAttributes {
  id: number;
  comment: string;
}

class Comment extends Model<CommentAttributes>
implements CommentAttributes {
  id!: number;
  comment!: string;
};

const comment = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED, 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false
  },
  tweet_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
};

Comment.init(comment, { modelName: 'Comment', sequelize: Database.sequelize });

export = Comment;
