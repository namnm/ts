import { Column, DataType, Table } from 'sequelize-typescript'

import BaseModel from '../app/BaseModel'

@Table
class AuthToken extends BaseModel<AuthToken> {
  @Column
  tokenValue!: string

  @Column(DataType.ENUM('login', 'recover', 'verify'))
  type!: string

  @Column
  userAgent!: string

  @Column
  ip!: string

  @Column
  userId!: string

  @Column
  createdById = 0
}

export default AuthToken
