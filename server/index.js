const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routers/users')
const authRouter = require('./routers/auth')
const path = require('path')
const app = express()
const cors = require('cors')

require('dotenv').config()

const port = process.env.PORT || 4001

app.use(cors())

app.use(bodyParser.json())
app.use('/users', usersRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Welcome to our server!')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`)
})
