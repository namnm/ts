import { Options, Sequelize } from 'sequelize'

import { toAttributes0 } from '../-/types'
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
    allowNull: true,
  },
  updatedById: {
    INTEGER: true,
    allowNull: true,
  },
  deletedAt: {
    DATE: true,
    allowNull: true,
  },
  deletedById: {
    INTEGER: true,
    allowNull: true,
  },
}

export const baseColumnsForMigration = toAttributes0(baseColumns)
