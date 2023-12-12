import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class Product extends Model {}

// Definerer modellens felter og generelle options
Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING,
            allowNull: false
		},
        image: {
			type: DataTypes.STRING,
            allowNull: false,
			defaultValue:0
		},
        description: {
			type: DataTypes.TEXT,
            allowNull: false
		},
        price: {
			type: DataTypes.DOUBLE(16,2),
            allowNull: false,
            defaultValue:0.00
		},
        stock: {
			type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
		},
		brand_id: {
			type: DataTypes.INTEGER,
            allowNull: false,
			key: 'id'
		}
	},
	{
		sequelize
	}
)

export default Product