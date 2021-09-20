const {Router, request} = require('express')
const router = Router()

const {logearUsuario, registrarUsuario} = require('../controllers/auth.controller')

router.post('/login', [], logearUsuario)

router.post('/register', [], registrarUsuario)

module.exports = router