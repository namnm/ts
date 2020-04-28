import { GraphQLDateTime } from 'graphql-iso-date'
import { makeExecutableSchema } from 'graphql-tools'
import { omit } from 'lodash'

import * as schemaModels from '../schema'

const rootValue = {
  Query: {
    hello: () => 'world',
  },
  DateTime: () => GraphQLDateTime,
}

const schemas = Object.values(omit(schemaModels, ['__esModule'])).filter(m => m)

const schema = makeExecutableSchema({
  typeDefs: `
    scalar DateTime
    type Query {
      hello: String!
    }
    ${schemas}
  `,
  resolvers: rootValue,
})

export { rootValue }
export default schema
