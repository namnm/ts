import { QueryInterface } from 'sequelize'

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      'Email',
      [
        {
          email: 'devusr1@example.com',
          isVerified: false,
          createdById: 0,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          email: 'devusr2@example.com',
          isVerified: false,
          createdById: 0,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          email: 'devusr3@example.com',
          isVerified: false,
          createdById: 0,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          email: 'devusr14@example.com',
          isVerified: true,
          createdById: 0,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          email: 'devusr15@example.com',
          isVerified: true,
          createdById: 0,
          createdAt: '2020-04-02 03:06:49',
        },
      ],
      {},
    )
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('Email', {}, {})
  },
}
