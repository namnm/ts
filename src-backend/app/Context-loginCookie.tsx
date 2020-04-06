import cookie from 'cookie'

import { loginCookieExpires, loginCookieKey, loginHeaderType } from '../config'
import Context from './Context'

function getLoginCookie(this: Context) {
  const h = this.req.headers
  const c = cookie.parse(h.cookie || '')
  if (loginCookieKey in c) {
    return c[loginCookieKey]
  }
  const a = h.authorization
  if (a && a.startsWith(loginHeaderType)) {
    return a.replace(loginHeaderType, '')
  }
  return ''
}

function setLoginCookie(this: Context, loginToken: string) {
  const c = cookie.serialize(loginCookieKey, loginToken, {
    httpOnly: true,
    expires: new Date(Date.now() + loginCookieExpires),
    maxAge: loginCookieExpires / 1000,
  })
  this.res.setHeader('Set-Cookie', c)
}

function removeLoginCookie(this: Context) {
  const c = cookie.serialize(loginCookieKey, '', {
    httpOnly: true,
    expires: new Date(Date.now() - 1000),
    maxAge: -1,
  })
  this.res.setHeader('Set-Cookie', c)
}

export { getLoginCookie, setLoginCookie, removeLoginCookie }
