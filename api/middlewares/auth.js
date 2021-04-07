const utilities = require('../utilities')

const isAuth = (req, res, next) => {
    if(!req.headers.authorization) 
        return res.status(401).json({error: ''})

    const token = req.headers.authorization
    const decodedToken = utilities.decodeToken(token)

    if(decodedToken.error) 
        return res.status(decodedToken.status).json({error: decodedToken.message})
    
    req.user = decodedToken
    next()
}

module.exports = isAuth