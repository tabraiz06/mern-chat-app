const express= require('express')
const {Login, signUp, logout} = require('../controllers/userController')

const router= express.Router()
router.post('/register', signUp)
router.post('/login', Login)
router.post('/logout', logout)


module.exports= router
