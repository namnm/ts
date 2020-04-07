import { Column, Table } from 'sequelize-typescript'

import BaseModel from '../app/BaseModel'

@Table
class Email extends BaseModel<Email> {
  @Column
  email!: string

  @Column
  isVerified!: boolean
}

export default Email
