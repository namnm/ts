import { Column, Table } from 'sequelize-typescript'

import BaseModel from '../app/BaseModel'

@Table
class UserInEmail extends BaseModel<UserInEmail> {
  @Column
  userId!: number

  @Column
  emailId!: number
}

export default UserInEmail
