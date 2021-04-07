const db = require('../db')
const {hashTxt, createToken} = require('../utilities')


const isValidName = name => {
    if(name && name.length >= 3) return true
    return false
}



const isValidEmail = email => {
    if(!email) return false
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase())
}



const isValidPassword = password => {
    if(!password) return false

    const containSpecialCharacter = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g.test(password)

    return (password.length >=8 && containSpecialCharacter)
}



const isValidUser = user => {
    if(isValidName(user.name)
        && user.gender
        && isValidEmail(user.email)
        && isValidPassword(user.password))
        return true
    return false
}



exports.signup = (req, res) => {
    const {name, lastName, gender, email, password} = req.body
    const user = {name, lastName, gender, email, password}

    if(!isValidUser(user)) return res.status(400).end()

    user.password = hashTxt(password)

    db.getPool().query('INSERT INTO users SET ?', [user], err => {
        if(err) return res.status(500).end()

        return res.status(201).end()
    })
}



exports.login = (req, res) => {
    const {email, password} = req.body

    if(!email || !password) return res.status(401).end()

    db.getPool().query('SELECT id, email, password FROM users WHERE email=?', [email], (err, result) => {
        if(err) {console.error(err); return res.status(500).end()}
        if(!result.length) return res.status(401).end()
        const user = result[0]

        if(!(hashTxt(password) === user.password)) return res.status(401).end()
        
        const token = createToken(user.id)

        return res.status(200).json({token})
    })
}