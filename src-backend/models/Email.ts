import { omit } from 'lodash'

import defineModel from '../-/defineModel'
import sequelizeToGraphQL from '../-/sequelizeToGraphQL'
import db, { baseColumns } from '../app/db'

const Email = defineModel(db, 'Email', {
  ...omit(baseColumns, ['createdById']),

  emailAddress: {
    INTEGER: true,
  },
  isVerified: {
    BOOLEAN: true,
  },
})
export default Email

export const emailSchema = sequelizeToGraphQL(Email, {
  // TODO
})
