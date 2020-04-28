import { omit, set } from 'lodash'
import { mergeTypes } from 'merge-graphql-schemas'

import { Definition, ResolversType } from './graphqlTypes'

class Schema {
  private _typeDefs: string[] = []
  private _resolvers: ResolversType = {}

  constructor(defs: Definition[]) {
    this.setTypedefsAndResolvers(defs)
  }

  setTypedefsAndResolvers(defs: Definition[]) {
    defs.forEach(def => {
      this._typeDefs = this._typeDefs.concat(def.typeDefs as string[])
      Object.entries(omit(def, ['typeDefs'])).forEach(
        ([resolverKey, resolveFn]) => {
          //remove 'resolver.' key
          set(this._resolvers, resolverKey.substring(9), resolveFn)
        },
      )
    })
  }

  getTypeDefs() {
    return mergeTypes(this._typeDefs)
  }

  getResolvers() {
    return this._resolvers
  }
}

export default Schema
