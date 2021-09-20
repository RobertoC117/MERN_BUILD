const dotenv = require('dotenv')
const Server = require('./models/server')

dotenv.config({path: __dirname + '/config/.env'})

const server = new Server()

server.listen()