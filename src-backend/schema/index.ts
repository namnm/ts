import { modelDefs } from '../models'
import DateTimeDefs from './DateTime'
import { Definition } from './graphqlTypes'
import Schema from './Schema'

//add more schema here,
const arrDefs: Definition[] = [
  //get defs from model
  ...Object.values(modelDefs),
  //other schema
  DateTimeDefs,
]
/*
[
        {
            typeDefs: ['hello: String!', 'users: [User!]!'] | 'hello: String!',
            'resolver.hello': async (parent, args, ctx, info) => {
                return 'hello'
            },
            ...
         },
     ]
 */
const schema = new Schema(arrDefs)

const resolvers = schema.getResolvers()
const typeDefs = schema.getTypeDefs()

export { typeDefs, resolvers }
