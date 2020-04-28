import { ModelAttributeColumnOptions } from 'sequelize'

import log from '../dev/log'
import Model from './Model'
import { ModelAttributes, supportedTypes } from './types'
import validateSequelizeGraphQL from './validateSequelizeGraphQL'

function getFieldType<A extends ModelAttributes>(
  modelName: string,
  fieldName: keyof A,
  type: keyof typeof supportedTypes,
) {
  if (fieldName === 'id' || (fieldName as string).endsWith('Id')) {
    return 'ID'
  }
  switch (type) {
    case 'BOOLEAN':
      return 'Boolean'
    case 'DATE':
      return 'DateTime'
    case 'FLOAT':
      return 'Float'
    case 'STRING' || 'TEXT':
      // case 'ENUM':
      return 'String'
    case 'INTEGER':
      return 'Int'
    default:
      log.fatal(
        `getFieldType: Sequelize type ${type} is not supported, field: ${modelName}.${fieldName}`,
      )
      //It won't occur
      return undefined
  }
}

export default function sequelizeToGraphQL<A extends ModelAttributes>(
  m: Model<A>,
  config: SequelizeGraphQLConfig<A>,
) {
  validateSequelizeGraphQL(m, config)

  return `
        type ${m.name} {
          ${Object.entries(m.rawAttributes)
            .filter(([fieldName]: [keyof A, ModelAttributeColumnOptions]) => {
              return config.include?.length
                ? config.include.indexOf(fieldName) >= 0
                : config.exclude?.length
                ? config.exclude.indexOf(fieldName) < 0
                : true
            })
            .map(
              ([fieldName, fieldAttribute]: [
                keyof A,
                ModelAttributeColumnOptions,
              ]) => {
                return `${fieldName}: ${getFieldType(
                  m.name,
                  fieldName,
                  fieldAttribute.type as keyof typeof supportedTypes,
                )}${fieldAttribute.allowNull ? '' : '!'}\n`
              },
            )
            .concat(config.virtual || [])
            .join('')}
        }
      `
}

export type SequelizeGraphQLConfig<A extends ModelAttributes> = {
  include?: (keyof A)[]
  exclude?: (keyof A)[]
  virtual?: string[]
  // TODO
}
