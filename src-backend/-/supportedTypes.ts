import { BOOLEAN, DATE, FLOAT, INTEGER, STRING, TEXT } from 'sequelize'

export default {
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
