import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'

class Product extends Model {
  public id!: number
  public name!: string
  public description!: string
  public category!: string
  public rating!: number
}


Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps:false,
    modelName: 'product',
    tableName:'product'
  }
)

export default Product