import Model, { ModelAttributes } from './Model'
import validateSequelizeGraphQL from './validateSequelizeGraphQL'

export default function sequelizeToGraphQL<A extends ModelAttributes>(
  m: Model<A>,
  c: SequelizeGraphQLConfig<A>,
) {
  validateSequelizeGraphQL(m, c)
  // TODO
}

export type SequelizeGraphQLConfig<A extends ModelAttributes> = {
  include?: (keyof A)[]
  exclude?: (keyof A)[]
  // TODO
}
