import { omit } from 'lodash'
import Sequelize, { QueryInterface } from 'sequelize'

import baseModel from '../baseModel'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('Email', {
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ...omit(baseModel, ['createdById']),
    })

    await queryInterface.addConstraint('Email', ['email'], {
      type: 'unique',
      name: 'Email_email_unique',
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Email')
  },
}
