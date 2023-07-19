import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'
import { User } from './users.model'

class Category extends Model {
  public id!: number
  public name!: string

}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    modelName: 'category',
    tableName:'category'
  }
)

export default Category
