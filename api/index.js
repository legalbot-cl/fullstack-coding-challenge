const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const app = express()


const PORT = process.env.PORT || 4000
const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN || true

const corsOptions = {
    origin: CLIENT_DOMAIN,
    optionsSuccessStatus: 200,
    methods: ['GET', 'OPTIONS', 'POST']
}


app.use(morgan('combined'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))



let api = require('./routes')

app.use('/v1', api)



app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})