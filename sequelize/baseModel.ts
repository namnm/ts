import Sequelize from 'sequelize'

// For quickly spread over migrations
// Should sync with src-backend/app/BaseModel
export default {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  createdById: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  updatedById: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  deletedAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  deletedById: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}
