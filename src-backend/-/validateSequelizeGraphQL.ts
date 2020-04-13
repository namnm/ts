import Model, { ModelAttributes } from './Model'
import { SequelizeGraphQLConfig } from './sequelizeToGraphQL'

export default function validateSequelizeGraphQL<A extends ModelAttributes>(
  m: Model<A>,
  c: SequelizeGraphQLConfig<A>,
) {
  void m
  void c
  // TODO
}
