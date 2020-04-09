import { omit } from 'lodash'
import Sequelize, { QueryInterface } from 'sequelize'

import baseModel from '../baseModel'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('AuthToken', {
      tokenValue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM('login', 'recover', 'verify'),
        allowNull: false,
      },
      userAgent: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ...omit(baseModel, ['createdById']),
    })

    await queryInterface.addConstraint('AuthToken', ['userId'], {
      type: 'foreign key',
      name: 'AuthToken_userId_foreignKey',
      references: {
        table: 'User',
        field: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('AuthToken')
  },
}
