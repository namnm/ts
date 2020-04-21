import { omit } from 'lodash'

import defineModel from '../-/defineModel'
import sequelizeToGraphQL from '../-/sequelizeToGraphQL'
import db, { baseColumns } from '../app/db'

const User = defineModel(db, 'User', {
  ...omit(baseColumns, ['createdById']),

  primaryEmailId: {
    INTEGER: true,
  },
  password: {
    STRING: true,
  },
})
export default User

export const userSchema = sequelizeToGraphQL(User, {
  exclude: ['password'],
  // TODO
})
