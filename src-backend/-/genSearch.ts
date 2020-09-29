import Model from './Model'
import { ModelAttributes } from './types'
import { lowerCaseFirstChar } from './utils'

function genSearch<A extends ModelAttributes>(m: Model<A>) {
  const mName = lowerCaseFirstChar(m.name)
  return {
    typeDef: `extend type Query {
      ${mName}s: [${m.name}]
    }`,
    resolver: {
      Query: {
        [`${mName}s`]: async () => {
          return await m.findAllWhere()
        },
      },
    },
  }
}

export default genSearch
