import path from 'path'
import { Sequelize, SequelizeOptions } from 'sequelize-typescript'

import { sequelizeConfig } from '../config'

export default new Sequelize({
  ...(sequelizeConfig as SequelizeOptions),
  models: [path.join(__dirname, '../models')],
})
