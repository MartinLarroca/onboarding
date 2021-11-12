import { Model, DataTypes } from 'sequelize';

import Database from '../db/config/database';

interface UserAttributes {
  id: string;
  name: string;
  surname: string;
  createdAt: Date;
  updatedAt: Date;
}

class User extends Model<UserAttributes> implements UserAttributes {
  id!: string;
  name!: string;
  surname!: string;
  email!: string;
  createdAt: Date;
  updatedAt: Date;
}

const user = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
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

User.init(user, {
  modelName: 'User',
  tableName: 'users',
  sequelize: Database.sequelize,
});

export = User;
