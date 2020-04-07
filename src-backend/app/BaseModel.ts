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
