import {
  BOOLEAN,
  DATE,
  FLOAT,
  INTEGER,
  ModelAttributeColumnOptions as ModelAttributeColumnOptions0,
  STRING,
  TEXT,
} from 'sequelize'

export const supportedTypes = {
  BOOLEAN,
  INTEGER,
  FLOAT,
  STRING,
  TEXT,
  DATE,
}

// Must sync with the above supported types
// We declare those interfaces and use in ToModelType
// The conditional type check there will work correctly
export interface BooleanType {
  BOOLEAN: boolean
}
export interface IntegerType {
  INTEGER: boolean
}
export interface FloatType {
  FLOAT: boolean
}
export interface StringType {
  STRING: boolean
}
export interface TextType {
  TEXT: boolean
}
export interface DateType {
  DATE: boolean
}
export interface Nullable {
  allowNull: boolean
}

export type ToModelType<A extends ModelAttributes> = {
  [k in keyof A]:
    | (A[k] extends BooleanType
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
        : never)
    | (A[k] extends Nullable ? null : never)
}

export type ToAttributes0<A extends ModelAttributes> = {
  [k in keyof A]: ModelAttributeColumnOptions0
}
export function toAttributes0<A extends ModelAttributes>(a: A) {
  return Object.entries(a).reduce(
    (m, [k, c]) => ({
      ...m,
      [k]: {
        ...c,
        type: Object.keys(supportedTypes).find(t => t in c) as string,
        allowNull: c.allowNull === true,
      },
    }),
    {} as ToAttributes0<A>,
  )
}

export type ModelAttributes = {
  [name: string]: ModelAttributeColumnOptions
}

export interface ModelAttributeColumnOptions
  extends Omit<ModelAttributeColumnOptions0, 'type'>,
    Partial<Nullable>,
    Partial<BooleanType>,
    Partial<IntegerType>,
    Partial<FloatType>,
    Partial<StringType>,
    Partial<TextType>,
    Partial<DateType> {}
