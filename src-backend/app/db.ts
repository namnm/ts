import { Options, Sequelize } from 'sequelize'

import { sequelizeConfig } from '../config'

export default new Sequelize(sequelizeConfig as Options)

export const baseColumns = {
  id: {
    INTEGER: true,
    primaryKey: true,
    autoIncrement: true,
  },
  createdAt: {
    DATE: true,
  },
  createdById: {
    INTEGER: true,
  },
  updatedAt: {
    DATE: true,
  },
  updatedById: {
    INTEGER: true,
  },
  deletedAt: {
    DATE: true,
  },
  deletedById: {
    INTEGER: true,
  },
}
