import { QueryInterface } from 'sequelize'

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      'UserInEmail',
      [
        {
          userId: 1,
          emailId: 1,
          createdById: 1,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          userId: 1,
          emailId: 4,
          createdById: 1,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          userId: 1,
          emailId: 5,
          createdById: 1,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          userId: 2,
          emailId: 2,
          createdById: 2,
          createdAt: '2020-04-02 03:06:49',
        },
        {
          userId: 3,
          emailId: 3,
          createdById: 3,
          createdAt: '2020-04-02 03:06:49',
        },
      ],
      {},
    )
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('UserInEmail', {}, {})
  },
}
