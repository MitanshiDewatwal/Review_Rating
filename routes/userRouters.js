const validation = require('../validation/uservalidation')
const user = require('../controllers/userControllers')
const auth = require('../middlewares/authMiddleware')
const {upload}= require('../middlewares/imageStorage')
const express = require('express')
const router = express.Router()

router.post("/register", upload.single("profilePic"),validation.registerUserValidation,user.signUpUser)
router.post("/login", validation.loginUservalidation, user.userLogin)
router.post("/resetPasswordEmail", user.resetPasswordEmail)
router.post("/resetPassword/:id/:token", user.userResetPassword)

module.exports = router;
