import { GraphQLFieldResolver, GraphQLResolveInfo } from 'graphql'

import Context from '../app/Context'

export type defsType = string | string[]

export type resolverFnType = <TSource = any>(
  parent?: TSource,
  args?: { [argName: string]: any },
  context?: Context,
  info?: GraphQLResolveInfo,
) => any | GraphQLFieldResolver<TSource, Context>

export type ResolversType = {
  [name: string]: resolverFnType
}

export interface Definition {
  // get key of def object can be 'typeDefs' or 'resolver.*'
  [name: string]: defsType | resolverFnType
}
