import { omit } from 'lodash'
import Sequelize, { QueryInterface } from 'sequelize'

import { baseColumnsForMigration } from '../../src-backend/app/db'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('Email', {
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },

      ...omit(baseColumnsForMigration, ['createdById']),
    })

    await queryInterface.addConstraint('Email', ['emailAddress'], {
      type: 'unique',
      name: 'Email_emailAddress_unique',
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Email')
  },
}
