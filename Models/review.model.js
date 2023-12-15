import sequelize from '../Config/db.sequelize.js';
import { Model, DataTypes } from 'sequelize';
import User from '../Models/users.model.js'; 



class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    num_stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize,
  }
);




export default Review;
