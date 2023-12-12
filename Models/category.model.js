import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class Category extends Model {}

// Definerer modellens felter og generelle options
Category.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		title: {
			type: DataTypes.STRING,
            allowNull: false
		},
		is_active: {
			type: DataTypes.BOOLEAN,
            allowNull: false
		}
	},
	{
		sequelize
	}
)

export default Category