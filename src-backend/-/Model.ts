import { Model as Model0, ModelCtor as ModelCtor0 } from 'sequelize'

import { ModelAttributes, ToAttributes0, ToModelType } from './types'

export default class Model<A extends ModelAttributes> {
  constructor(private m: ModelCtor0<Model0>) {}

  get name() {
    return this.m.name
  }
  get rawAttributes() {
    return (this.m.rawAttributes as unknown) as ToAttributes0<A>
  }
  // TODO add other model getters here

  async findById<K extends keyof ToModelType<A>>(id: number, attrs?: K[]) {
    const v = await this.m.findOne({
      where: { id },
      attributes: attrs as string[],
    })
    return (v as unknown) as Pick<ToModelType<A>, K>
  }

  // TODO add other model methods here
}
