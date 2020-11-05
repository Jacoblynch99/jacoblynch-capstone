const express = require('express')
const businessController = require('../controllers/businesses')
const { jwtCheck } = require('../middleware')
const router = express.Router()

router.get('/', businessController.getAllBusinesses)

router.get('/all', jwtCheck, businessController.getAllBusinesses)

module.exports = router
