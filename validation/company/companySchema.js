const Joi = require("joi").extend(require("@joi/date"))
const joi = require("joi")

const Schema = {
    addcompany : joi.object({
        companyName : joi.string().required(),
        location : joi.string().required(),
        city : joi.string().required(),
        foundedOn : Joi.date().format("YYYY/MM/DD")
    }).unknown(true),
}

module.exports=Schema