import Model from './Model'
import { SequelizeGraphQLConfig } from './sequelizeToGraphQL'
import { ModelAttributes } from './types'

export default function validateSequelizeGraphQL<A extends ModelAttributes>(
  m: Model<A>,
  c: SequelizeGraphQLConfig<A>,
) {
  void m
  void c
  // TODO
}
