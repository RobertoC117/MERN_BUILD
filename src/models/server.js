const express = require('express')
const cors = require('cors')
const path = require('path')
const {connect} = require('../db/db-connection')


class Server{

    constructor(){
        this.app = express()
        this.paths = {
            auth: '/api/auth'
        }
        this.activeMiddlewares()
        this.activeRoutes()
        this.connectDB()
    }

    async connectDB(){
        await connect()
    }

    activeMiddlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    activeRoutes(){
        this.app.use('/', express.static(path.join(__dirname,'..', 'public')))
        this.app.use(this.paths.auth, require('../routes/auth'))
    }

    listen(){
        this.app.listen(process.env.PORT, ()=>{
            console.info(`Server on port ${process.env.PORT}`)
        })
    }
}

module.exports = Server