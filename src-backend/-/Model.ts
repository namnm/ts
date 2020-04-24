import {
  Model as Model0,
  ModelCtor as ModelCtor0,
  WhereOptions,
} from 'sequelize'

import { ModelAttributes, ToAttributes0, ToModelType } from './types'

type UpdateData<A extends ModelAttributes> = {
  [k in keyof A]?: ToModelType<A>[k]
}

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

  async findAllWhere<K extends keyof ToModelType<A>>(
    where?: WhereOptions,
    attrs?: K[],
  ) {
    const v = await this.m.findAll({
      where,
      attributes: attrs as string[],
    })
    return (v as unknown) as Pick<ToModelType<A>, K>
  }

  async findOneWhere<K extends keyof ToModelType<A>>(
    where?: WhereOptions,
    attrs?: K[],
  ) {
    const v = await this.m.findOne({
      where,
      attributes: attrs as string[],
    })
    return (v as unknown) as Pick<ToModelType<A>, K>
  }

  async countWhere(where?: WhereOptions) {
    const v = await this.m.count({ where })
    return v
  }

  async existsWhere(where?: WhereOptions) {
    const v = await this.m.count({ where })
    return !!v
  }

  async updateWhere(where: WhereOptions, data: UpdateData<A>) {
    const [v] = await this.m.update(data, { where })
    return v
  }

  async destroyWhere(where: WhereOptions) {
    const v = await this.m.destroy({ where })
    return v
  }

  // TODO add other model methods here
}
