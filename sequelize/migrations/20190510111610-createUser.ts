import Sequelize, { QueryInterface } from 'sequelize'

import { baseColumnsForMigration } from '../../src-backend/app/db'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('User', {
      primaryEmailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ...baseColumnsForMigration,
    })

    await queryInterface.addConstraint('User', ['primaryEmailId'], {
      type: 'foreign key',
      name: 'User_primaryEmailId_foreignKey',
      references: {
        table: 'Email',
        field: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })

    await queryInterface.addConstraint('User', ['primaryEmailId'], {
      type: 'unique',
      name: 'User_primaryEmailId_unique',
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('User')
  },
}
