import { Model, DataTypes } from 'sequelize'
import sequelize from '../sequelize'
import { toDefaultValue } from 'sequelize/types/utils'


class User extends Model {
  public id!: number
  public email!: string
  public password!: string
  public role!: string
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin', 'customer'),
      allowNull: false,
      defaultValue:"customer"
    }
  },
  {
    tableName: 'users',
    sequelize,
    timestamps: false
  }
)

export  {User}