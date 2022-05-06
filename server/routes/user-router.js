const express = require('express')
const UserCtrl = require('../controllers/user-controller')
const router = express.Router()
// use router for crud methods from controllers
router.post('/user', UserCtrl.createUser)
router.put('/user/:id', UserCtrl.updateUser) 
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/users', UserCtrl.getUsers)

module.exports = router