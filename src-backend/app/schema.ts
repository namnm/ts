import { GraphQLDateTime } from 'graphql-iso-date'
import { IResolvers, makeExecutableSchema } from 'graphql-tools'

import schemaModels from '../schema'

const rootValue = {
  Query: {
    hello: () => 'world',
  },
  DateTime: () => GraphQLDateTime,
}

const schemas = Object.values(schemaModels).filter(m => m)

const typeDefs = schemas.map(s => s.typeDef)
const resolvers: IResolvers<any, any>[] = schemas.map(s => s.resolver)

const schema = makeExecutableSchema({
  typeDefs: `
    scalar DateTime
    type Query {
      hello: String!
    }
    ${typeDefs}
  `,
  resolvers: [rootValue, ...resolvers],
})

export { rootValue }
export default schema
