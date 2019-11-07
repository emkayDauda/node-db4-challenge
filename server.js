const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

const recipeRoute = require('./routes/recipeRoutes')

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/recipes', recipeRoute)

server.get('/', (req, res) => {
    res.send('WORKS')
})

module.exports = server