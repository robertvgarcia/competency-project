const express = require('express')
const CityCtrl = require('../controllers/city-controller')
const router = express.Router()
// use router for crud methods from controllers
router.post('/city')
router.get('/cities', CityCtrl.getCities)

module.exports = router