import sequelize from '../Config/db.sequelize.js'
import { Model, DataTypes } from 'sequelize'

// Deklarerer Class Category som udvider SQ's model klasse
class Brand extends Model {}

// Definerer modellens felter og generelle options
Brand.init(
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
            allowNull: false
		},
        
	},
	{
		sequelize,
		modelName: 'brand',
		underscored: true
	}
)

export default Brand