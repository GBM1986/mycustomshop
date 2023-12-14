import sequelize from '../Config/db.sequelize.js';
import { Model, DataTypes } from 'sequelize';


class Gender extends Model {}

Gender.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
  }
);


export default Gender;
