const router = require('express').Router()

const Controller = require('../controllers/controllerSnap')

router.get('/', Controller.transaction)
router.get('/finish', Controller.finish)
router.get('/unfinished', Controller.unfinished)
router.get('/Error', Controller.error)

module.exports = router