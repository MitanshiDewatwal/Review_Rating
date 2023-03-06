const Joi = require("joi").extend(require("@joi/date"))
const joi = require("joi")

const Schema = {
    addReview: joi.object({
        enterYourReview: joi.string().required(),
        rating: joi.number().integer().max(5).required(),
        company_id: joi.string().required(),
        user_id: joi.string().required()
    }).unknown(true)
}

module.exports = Schema