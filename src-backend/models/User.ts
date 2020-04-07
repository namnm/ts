import { Column, Table } from 'sequelize-typescript'

import BaseModel from '../app/BaseModel'

@Table
class User extends BaseModel<User> {
  @Column
  primaryEmailId!: number

  @Column
  password!: string
}

export default User
