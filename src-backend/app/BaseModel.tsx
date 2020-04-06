import Sequelize from 'sequelize'
import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  UpdatedAt,
} from 'sequelize-typescript'

export default class BaseModel<T> extends Model<T> {
  @Column({ primaryKey: true, autoIncrement: true })
  id!: number

  @CreatedAt
  createdAt!: Date
  @Column
  createdById!: number

  @UpdatedAt
  updatedAt?: Date
  @Column
  updatedById?: number

  @DeletedAt
  deletedAt?: Date
  @Column
  deletedById?: number
}

// For quickly spread over migrations
// Should sync with the above BaseModel class
export const baseModelConfig = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  createdById: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedById: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  deletedById: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}
