import { ModelAttributeColumnOptions } from 'sequelize'

import log from '../dev/log'
import Model from './Model'
import { SequelizeGraphQLConfig } from './sequelizeToGraphQL'
import { ModelAttributes } from './types'

export default function validateSequelizeGraphQL<A extends ModelAttributes>(
  m: Model<A>,
  c: SequelizeGraphQLConfig<A>,
) {
  //validate include , exclude
  log.fatal(
    `getFields: Found both include and exclude in the config ${c} for model ${m.name}, it should contain only one of them`,
    !!c.include?.length && !!c.exclude?.length,
  )
  //validate fieldType
  Object.entries(m.rawAttributes).forEach(
    ([fieldName, fieldAttributes]: [keyof A, ModelAttributeColumnOptions]) => {
      if (
        //check fieldName === 'id' || endsWith('Id') must have type INTEGER
        (fieldName === 'id' || (fieldName as string).endsWith('Id')) &&
        fieldAttributes.type !== 'INTEGER'
      ) {
        log.fatal(
          `getFieldType: Sequelize field ${fieldName} is named ${
            fieldName === 'id' ? 'id' : '*Id'
          } in model ${m.name} must have type NUMBER ${fieldAttributes.type}.`,
        )
      }
      // other types of fieldAttribute is checked in validateDefineModel
    },
  )
}
