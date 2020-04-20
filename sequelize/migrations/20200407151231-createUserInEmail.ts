import Sequelize, { QueryInterface } from 'sequelize'

import { baseColumnsForMigration } from '../../src-backend/app/db'

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('UserInEmail', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      emailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ...baseColumnsForMigration,
    })

    await queryInterface.addConstraint('UserInEmail', ['emailId'], {
      type: 'foreign key',
      name: 'UserInEmail_emailId_foreignKey',
      references: {
        table: 'Email',
        field: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })

    await queryInterface.addConstraint('UserInEmail', ['userId'], {
      type: 'foreign key',
      name: 'UserInEmail_userId_foreignKey',
      references: {
        table: 'User',
        field: 'id',
      },
      onUpdate: 'cascade',
      onDelete: 'cascade',
    })
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('UserInEmail')
  },
}
