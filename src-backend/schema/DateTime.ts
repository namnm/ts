import { GraphQLDateTime } from 'graphql-iso-date'

export default {
  typeDefs: 'scalar DateTime',
  'resolver.DateTime': () => GraphQLDateTime,
}
