import Sequelize, { QueryInterface } from 'sequelize'

import { baseColumnsForMigration } from '../../src-backend/app/db'

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
      ...baseColumnsForMigration,
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
