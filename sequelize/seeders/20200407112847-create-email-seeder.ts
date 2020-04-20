import { QueryInterface } from 'sequelize'

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      'Email',
      [
        {
          emailAddress: 'devusr1@example.com',
          isVerified: false,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          emailAddress: 'devusr2@example.com',
          isVerified: false,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          emailAddress: 'devusr3@example.com',
          isVerified: false,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          emailAddress: 'devusr14@example.com',
          isVerified: true,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          emailAddress: 'devusr15@example.com',
          isVerified: true,
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
