const { default: common } = require("@hapi/joi/lib/common")
const keys = require("@hapi/joi/lib/types/keys")
const company = require("./companySchema")
const { join } = require("path")

module.exports = {
    companyValidation: async (req,res,next) => {
        const value = await company.addcompany.validate(req.body,{abortEarly: false })
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
