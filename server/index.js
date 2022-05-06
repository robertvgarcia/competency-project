const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./connection')
const userRouter = require('./routes/user-router')
const childRouter = require('./routes/child-router')
const cityRouter = require('./routes/city-router')
const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
// log if connection to database has been made or not
db.once('open', function () {
	console.log('Connection to database has been made!')
}).on('error', function (error) {
	console.log('Connection error:', error)
})
// get route for server
app.get('/', (req, res) => {
    res.send('Server is up and running')
})
// give access for api
app.use('/api', userRouter, childRouter, cityRouter)
 // run server
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))