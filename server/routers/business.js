const express = require('express')
const businessController = require('../controllers/businesses')
const { checkJwt } = require('../middleware')
const router = express.Router()

router.get('/', businessController.getAllBusinesses)

module.exports = router
