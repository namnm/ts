import { Model as Model0, ModelCtor as ModelCtor0, Sequelize } from 'sequelize'

import Model, {
  ModelAttributeColumnOptions,
  ModelAttributes,
  ToAttributes0,
} from './Model'
import supportedTypes from './supportedTypes'
import validateDefineModel from './validateDefineModel'

export default function defineModel<A extends ModelAttributes>(
  db: Sequelize,
  name: string,
  attrs: A,
) {
  validateDefineModel(attrs)

  const attrs0 = Object.entries(attrs).reduce(
    (m, [k, a]: [keyof A, ModelAttributeColumnOptions]) => ({
      ...m,
      [k]: {
        ...a,
        type: Object.keys(supportedTypes).find(t => t in a) as string,
      },
    }),
    {} as ToAttributes0<A>,
  )

  const m = (db.define(name, attrs0) as unknown) as ModelCtor0<Model0>
  return new Model(m) as Model<A>
}
