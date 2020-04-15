import { Model as Model0, ModelCtor as ModelCtor0, Sequelize } from 'sequelize'

import Model from './Model'
import { ModelAttributes, toAttributes0 } from './types'
import validateDefineModel from './validateDefineModel'

export default function defineModel<A extends ModelAttributes>(
  db: Sequelize,
  name: string,
  attrs: A,
) {
  validateDefineModel(name, attrs)

  const m = db.define(name, toAttributes0(attrs)) as unknown
  return new Model(m as ModelCtor0<Model0>) as Model<A>
}
