import Sequelize, { QueryInterface } from 'sequelize'

import baseModel from '../baseModel'

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
      ...baseModel,
    })
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('User')
  },
}
