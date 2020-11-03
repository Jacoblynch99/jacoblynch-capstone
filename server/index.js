const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const businessRouter = require('./routers/business')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 4001

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/business', businessRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
})

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`)
})
