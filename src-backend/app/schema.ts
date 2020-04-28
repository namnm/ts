import { makeExecutableSchema } from 'graphql-tools'
import { merge } from 'lodash'

import { resolvers, typeDefs } from '../schema'

const rootValue = {
  Query: {},
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: merge(rootValue, resolvers),
})

export { rootValue }
export default schema
