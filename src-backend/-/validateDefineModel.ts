import log from '../dev/log'
import {
  ModelAttributeColumnOptions,
  ModelAttributes,
  supportedTypes,
} from './types'

export default function validateDefineModel<A extends ModelAttributes>(
  name: string,
  attrs: A,
) {
  const supported = Object.keys(supportedTypes)
  Object.entries(attrs).forEach(
    ([k, a]: [keyof A, ModelAttributeColumnOptions]) => {
      const types = supported.filter(n => n in a)
      // Ensure the type is exactly only one of the supported types
      log.fatal(
        `Invalid type for ${name}.${k}, expect exact one of ${supported} but found ${types}`,
        types.length !== 1,
      )
      // Ensure the type is always true
      const type = types[0] as keyof ModelAttributeColumnOptions
      log.fatal(
        `Invalid ${name}.${k}.${type}, expect true but found ${a[type]}`,
        a[type] !== true,
      )
      // Ensure the allowNull is always true
      log.fatal(
        `Invalid ${name}.${k}.allowNull, expect true but found ${a.allowNull}. Remove "allowNull: false" if this column is not nullable`,
        'allowNull' in a && a.allowNull !== true,
      )
    },
  )
}
