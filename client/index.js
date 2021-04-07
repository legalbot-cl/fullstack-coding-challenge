const express = require('express')
const path = require('path')
const app = express()


const PORT = process.env.PORT || 4000
const clientPath = 'build'


app.use(express.static(path.join(__dirname, clientPath)))


app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, clientPath, '/index.html'))
})


app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})