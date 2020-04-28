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

export const userSchema = {
  typeDefs: [
    sequelizeToGraphQL(User, {
      exclude: ['password'],
    }),
    `input SearchUserInput {
          id: ID
      }`,
    `type Query {
        user(data: SearchUserInput): User! 
        hello: String
      }`,
  ],
  'resolver.Query.user': async () => {
    return await User.findById(1, ['id', 'createdAt'])
  },
  'resolver.Query.hello': async () => {
    return 'Hello World'
  },
}
