import Router from 'next/router'
import cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_KEY

/*
 * @params {string} jwtToken
 * @return {object} object
 */
export function verifyToken(jwtToken) {
  try {
    return jwt.verify(jwtToken, SECRET)
  } catch (err) {
    return null
  }
}

export function getAppCookies(req) {
  const parsedItems = {}
  if (req.headers.cookie) {
    const cookie = req.headers.cookie.split('=')
    parsedItems[cookie[0]] = decodeURI(cookie[1])
  }
  return parsedItems
}

export function logout(e) {
  e.preventDefault()
  cookies.remove('token')
  Router.push('/login')
}
