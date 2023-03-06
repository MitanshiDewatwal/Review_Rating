const express = require('express')
const router = express.Router()
const reviewControllers = require ('../controllers/reviewControllers')
const auth = require('../middlewares/authMiddleware')
const validation = require('../validation/review/reviewValidation')

router.post("/reviewadd",validation.reviewValidation,reviewControllers.addReview)
router.patch("/changeReview/:_id",reviewControllers.editReview)
router.delete("/deletedReview/:_id",reviewControllers.deleteReview)
router.get("/getList",reviewControllers.findReviewList)
router.get("/getDetail/:_id",reviewControllers.reviewDetail)

module.exports = router;
