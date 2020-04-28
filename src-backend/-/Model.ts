import {
  Model as Model0,
  ModelCtor as ModelCtor0,
  Op,
  WhereOptions,
  WhereValue,
} from 'sequelize'

import { ModelAttributes, ToAttributes0, ToModelType } from './types'

function normalizeOrArr(orArr: WhereOptions[] | WhereOptions) {
  if (Array.isArray(orArr)) {
    return orArr
  }
  return Object.entries(orArr).reduce(
    (arr: WhereOptions[], [k, v]: [string, WhereOptions | WhereValue]) => {
      arr.push({
        [k]: v,
      })
      return arr
    },
    [],
  )
}
function or(orArr: WhereOptions[] | WhereOptions) {
  return {
    [Op.or]: normalizeOrArr(orArr),
  }
}

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

  async findAllWhereOr(orArr: WhereOptions[] | WhereOptions) {
    return await this.findAllWhere(or(orArr))
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

  async findOneWhereOr(orArr: WhereOptions[] | WhereOptions) {
    return await this.findOneWhere(or(orArr))
  }

  async countWhere(where?: WhereOptions) {
    const v = await this.m.count({ where })
    return v
  }

  async countWhereOr(orArr: WhereOptions[] | WhereOptions) {
    return await this.countWhere(or(orArr))
  }

  async existsWhere(where?: WhereOptions) {
    const v = await this.m.count({ where })
    return !!v
  }

  async existsWhereOr(orArr: WhereOptions[] | WhereOptions) {
    return await this.existsWhere(or(orArr))
  }

  async updateWhere(where: WhereOptions, data: UpdateData<A>) {
    const [v] = await this.m.update(data, { where })
    return v
  }

  async updateWhereOr(
    orArr: WhereOptions[] | WhereOptions,
    data: UpdateData<A>,
  ) {
    return await this.updateWhere(or(orArr), data)
  }

  async destroyWhere(where: WhereOptions) {
    const v = await this.m.destroy({ where })
    return v
  }

  async destroyWhereOr(orArr: WhereOptions[] | WhereOptions) {
    return await this.destroyWhere(or(orArr))
  }

  async existsById(id: number) {
    return await this.existsWhere({ id })
  }

  async updateById(id: number, data: UpdateData<A>) {
    return await this.updateWhere({ id }, data)
  }

  async destroyById(id: number) {
    return await this.destroyWhere({ id })
  }

  // TODO add other model methods here
}
