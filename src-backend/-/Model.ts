import {
  Model as Model0,
  ModelAttributeColumnOptions as ModelAttributeColumnOptions0,
  ModelCtor as ModelCtor0,
} from 'sequelize'

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

export type ToModelType<A extends ModelAttributes> = {
  [k in keyof A]: A[k] extends BooleanType
    ? boolean
    : A[k] extends IntegerType
    ? number
    : A[k] extends FloatType
    ? number
    : A[k] extends StringType
    ? string
    : A[k] extends TextType
    ? string
    : A[k] extends DateType
    ? Date
    : never
}

export type ToAttributes0<T extends ModelAttributes> = {
  [k in keyof T]: ModelAttributeColumnOptions0
}

export type ModelAttributes = {
  [name: string]: ModelAttributeColumnOptions
}

export interface ModelAttributeColumnOptions
  extends Omit<ModelAttributeColumnOptions0, 'type'>,
    Partial<BooleanType>,
    Partial<IntegerType>,
    Partial<FloatType>,
    Partial<StringType>,
    Partial<TextType>,
    Partial<DateType> {}

interface BooleanType {
  BOOLEAN: boolean
}
interface IntegerType {
  INTEGER: boolean
}
interface FloatType {
  FLOAT: boolean
}
interface StringType {
  STRING: boolean
}
interface TextType {
  TEXT: boolean
}
interface DateType {
  DATE: boolean
}
