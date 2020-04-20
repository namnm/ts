import defineModel from '../-/defineModel'
import sequelizeToGraphQL from '../-/sequelizeToGraphQL'
import db, { baseColumns } from '../app/db'

const UserInEmail = defineModel(db, 'UserInEmail', {
  ...baseColumns,

  emailId: {
    INTEGER: true,
  },
  userId: {
    INTEGER: true,
  },
})
export default UserInEmail

export const userInEmailSchema = sequelizeToGraphQL(UserInEmail, {
  // TODO
})
