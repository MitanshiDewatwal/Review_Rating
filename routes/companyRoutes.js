const express = require('express')
const router = express.Router()
const companyControllers = require('../controllers/companyControllers')
const validation = require('../validation/company/companyValidation')
const { upload } = require('../middlewares/imageStorage')
const auth = require('../middlewares/authMiddleware')

router.post("/companyadd",upload.single("company_logo"), validation.companyValidation, companyControllers.addCompany)
router.get("/getCompany", companyControllers.getCompanyDetail)
router.get("/search", companyControllers.searchCompanyByCity)
router.get("/searched/:id", companyControllers.searchDetailOfComapnyAndReview)

module.exports = router;