const express = require('express')
const api = express.Router()

const user = require('./user')

api.route('/user/signup')
    .post(user.signup)
api.route('/user/login')
    .post(user.login)


api.route('*')
    .get((_req, res) => res.status(404).end())



module.exports = api