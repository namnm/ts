import { QueryInterface } from 'sequelize'

import { hashPassword } from '../../src-backend/utils/password'

export default {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.bulkInsert(
      'User',
      [
        {
          primaryEmailId: 1,
          password: hashPassword('123213'),
          createdAt: '2020-04-02 03:06:49',
        },
        {
          primaryEmailId: 2,
          password: hashPassword('123213'),
          createdAt: '2020-04-02 03:06:49',
        },
        {
          primaryEmailId: 3,
          password: hashPassword('123213'),
          createdAt: '2020-04-02 03:06:49',
        },
      ],
      {},
    )
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.bulkDelete('User', {}, {})
  },
}
