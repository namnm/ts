import { sequelizeConfig } from '../src-backend/config'

// Those keys to be used in sequelize-cli tools
// Both development and production will use the
//    same config via the environment variables
export const development = sequelizeConfig
export const production = sequelizeConfig
