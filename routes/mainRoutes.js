
const express = require('express')
const router = express.Router()
const userRouters = require('./userRouters')
const companyRouters = require('./companyRoutes')
const reviewRoutes = require('./reviewRoutes')

router.use('/user',userRouters)
router.use('/company',companyRouters)
router.use('/review',reviewRoutes)

module.exports = router;