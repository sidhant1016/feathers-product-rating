import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'
import Product from './product.model'

class Rating extends Model {
  public id!: number
  public productId!: number
  public rating!: number
}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id'
      },

    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'rating',
    tableName: 'rating'
  }
)

export default Rating
