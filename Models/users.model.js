import sequelize from '../Config/db.sequelize.js';
import { Model, DataTypes } from 'sequelize';
import  Gender  from '../Models/gender.model.js';
import  Review  from '../Models/review.model.js';

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 255],
      },
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

Gender.hasMany(User, { as: 'user', foreignKey: 'gender_id' });
User.hasMany(Review, { foreignKey: 'user_id', as: 'reviews' });

export default User;
