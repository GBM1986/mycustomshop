import sequelize from '../Config/db.sequelize.js';
import { Model, DataTypes } from 'sequelize';
import Brand from '../Models/brand.model.js'; // Import the Brand model

// Declare the Product class extending Sequelize's Model class
class Product extends Model {
  // Define the model's fields and general options
  static associate(models) {
    // Associate Product with Brand
    Product.belongsTo(models.Brand, {
      foreignKey: 'brand_id',
      as: 'brand', // Optional alias for the association
    });
  }
}

// Define the model's fields and general options
Product.init(
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
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default_image.jpg', // Replace with an actual default image filename
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DOUBLE(16, 2),
      allowNull: false,
      defaultValue: 0.00,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      key: 'id',
    },
  },
  {
    sequelize,
  }
);

export default Product;
