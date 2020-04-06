export const port = process.env.BACKEND_PORT

export const sequelizeConfig = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,
  define: {
    timestamps: true,
    paranoid: true,
    underscored: false,
    freezeTableName: true,
  },
}

export const loginCookieKey = process.env.LOGIN_COOKIE_KEY
export const loginCookieExpires = process.env.LOGIN_COOKIE_EXPIRES
export const loginHeaderType = process.env.LOGIN_HEADER_TYPE
