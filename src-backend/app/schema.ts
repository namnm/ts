import { makeExecutableSchema } from 'graphql-tools'

const rootValue = {
  Query: {
    hello: () => 'world',
  },
}

const schema = makeExecutableSchema({
  typeDefs: `
    type Query {
      hello: String!
    }
  `,
  resolvers: rootValue,
})

export { rootValue }
export default schema
