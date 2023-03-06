const { default: common } = require("@hapi/joi/lib/common")
const keys = require("@hapi/joi/lib/types/keys")
const review = require("./reviewSchema")
const { join } = require("path")

module.exports = {
    reviewValidation: async (req, res, next) => {
        const value = await review.addReview.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    },

    editReviewValidation: async (req, res, next) => {
        const value = await review.editReview.validate(req.body, { abortEarly: false })
        if (value.error) {
            res.json({
                success: 0,
                message: value.error.details[0].message
            })
        } else {
            next()
        }
    }
}
