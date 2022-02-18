const jwt = require('jsonwebtoken')

const jwtSecret = 'secretkey'

const createToken = payload => {
  return jwt.sign(payload, jwtSecret)
}

const verifyToken = token => {
  return jwt.verify(token, jwtSecret)
}

module.exports = { createToken, verifyToken }
