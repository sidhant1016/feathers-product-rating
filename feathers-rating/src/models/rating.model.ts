import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'

class Rating extends Model {
  public id!: number
  public userId!: number
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps:false,
    modelName: 'rating',
    tableName:'rating'
  }
)

export default Rating
