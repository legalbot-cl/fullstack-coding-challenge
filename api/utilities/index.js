const jwt = require('jwt-simple')
const moment = require('moment')
const crypto = require('crypto')

const jwtToken = process.env.JWT_TOKEN || 'jwtToken'



const createToken = userId => {
    const payload = {
        sub: userId,
        expire: moment().add(24, 'hours').unix()
    }
    
    return jwt.encode(payload, jwtToken)
}



const decodeToken = token => {
    let payload = {}
  
  try {
    payload = jwt.decode(token, jwtToken)

    if(payload.exp <= moment().unix()) {
      payload.error = true
      payload.message = 'expired token'
      payload.status = 401
    }
    
  } catch (err) {
      payload.error = true
      payload.status = 401,
      payload.message = 'invalid token'
  }
  return payload
}



const hashTxt = txt => {
    const hash = crypto.createHash('sha384')
    const data = hash.update(txt, 'utf-8')

    return data.digest('hex')
}


module.exports = {
  createToken,
  decodeToken,
  hashTxt
}