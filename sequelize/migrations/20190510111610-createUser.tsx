import Sequelize, { QueryInterface } from 'sequelize'

import { baseModelConfig } from '../../src-backend/app/BaseModel'

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
      ...baseModelConfig,
    })
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('User')
  },
}
