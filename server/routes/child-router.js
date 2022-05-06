const express = require('express')
const ChildCtrl = require('../controllers/child-crontroller')
const router = express.Router()
// use router for crud methods from controllers
router.post('/child', ChildCtrl.createChild)
router.put('/child/:id', ChildCtrl.updateChild)
router.delete('/child/:id', ChildCtrl.deleteChild)
router.get('/child/:id', ChildCtrl.getChildById)
router.get('/children', ChildCtrl.getChildren)

module.exports = router