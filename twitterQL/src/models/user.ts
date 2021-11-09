import { Model, DataTypes } from 'sequelize';

import Database from './index';

interface UserAttributes {
  id: string;
  name: string;
  surname: string;
  email: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  id!: string;
  name!: string;
  surname!: string;
  email!: string;
}

Database.sequelize.define('user', {
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
});

export default User;
