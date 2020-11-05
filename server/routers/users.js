const express = require('express')
const usersController = require('../controllers/users')
const { jwtCheck } = require('../middleware')
const router = express.Router()

router.get('/', usersController.getAllUsers)

router.get('/:id', usersController.getUserById)

router.post('/', jwtCheck, usersController.createUser)

router.put('/:id', jwtCheck, usersController.updateUserById)

router.delete('/:first_name', jwtCheck, usersController.deleteUserByFirstName)

module.exports = router
