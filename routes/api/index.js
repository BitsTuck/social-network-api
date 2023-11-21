const router = require('express').Router()

const thoughtRoutes = require('../../controllers/thoughtControllers')
const userRoutes = require('../../controllers/userControllers')

router.use('/thoughts', thoughtRoutes)
router.use('/users', userRoutes)

module.exports = router