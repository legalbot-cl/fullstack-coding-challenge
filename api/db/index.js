const mysql = require('mysql')

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PORT = process.env.DB_PORT || 3306
const DB_USERNAME = process.env.DB_USERNAME || 'username'
const DB_PASSWORD = process.env.DB_PASSWORD || 'password'
const DB_NAME = process.env.DB_NAME || 'name'

let pool

exports.getPool = () => {
    if(pool) return pool

    pool = mysql.createPool({
        connectionLimit: 10,
        host: DB_HOST,
        port: DB_PORT,
        user: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME
    })

    return pool
}
