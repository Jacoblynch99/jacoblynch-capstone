const express = require('express')
const usersController = require('../controllers/users')
const { jwtCheck } = require('../middleware')
const router = express.Router()

router.get('/', usersController.getAllBusinesses)

router.get('/:id', usersController.getUserById)

router.post('/', usersController.createTicket)

module.exports = router
