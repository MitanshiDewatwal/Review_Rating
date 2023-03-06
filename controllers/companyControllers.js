const { populate } = require("../models/compModelSchema");
const compModelSchema = require("../models/compModelSchema");
const reviewModelSchema = require("../models/reviewModelSchema");
//Add Comapny API.....................................................................................
const addCompany = async (req,res) => {
    try {
        const isCompanyExists = await compModelSchema.findOne({ companyName: req.body.companyName });
        if (isCompanyExists) {
            res.status(409).json({
                success: "failure",
                message: " company already exists",
            });
        } else {
            const addCompany = await new compModelSchema(req.body)
            try {
            //    const filePath = `/uploads/${req.file.filename}`;
            //    addCompany.company_logo = filePath;
             //   const info = addCompany.save();
                addCompany.save();
                res.status(201).json({
                    success: "success",
                    message: "company added Successfully",
                });
            } catch (err) {
                res.status(400).json({
                    success: "failure",
                    message: "error occur" + err.message
                });
            }
        }
    }catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "error occur" + err.message
        });
    }
}
//Get Company list Api..............................................................................................
const getCompanyDetail = async (req, res) => {
    try {
        const getCompany = await compModelSchema.find();
        res.status(200).json({
            success: "success",
            message: "Company list are displayed",
            data: getCompany,
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "Error occur"+ err.message
        });
    }
}
//Searching details of comapny by city name...............................................................
const searchCompanyByCity = async (req, res) => {
    try {
        const search = await compModelSchema.find({ city: req.body.city });
        res.status(200).json({
            success: "success",
            message: "Here is the search comapny by city name",
            data: search,
        });
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "Error occur" + err.message
        });
    }
}
//Searching Details of comapny and review.......................................................................
const searchDetailOfComapnyAndReview = async (req,res) => {
    const id = req.params.id
    try {
        const searchDetail = await compModelSchema.findById(id)
        const Review = await reviewModelSchema.find({ company_id: id })
            .populate({
                path: "user_id",
                select: "userName profilePic city"
            })
            .populate({
                path: "company_id",
                select: "comapnyName  location foundedOn profilePic city"

            });
        const comapnyandReview = {
            searchDetail: searchDetail,
            Review: Review
        }
        res.status(200).json({
            success: "success",
            message: "Here is the detail of company and review",
            data: comapnyandReview
        });
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "error occur" + err.message
        });
    }
}

module.exports = {
    addCompany,
    getCompanyDetail,
    searchCompanyByCity,
    searchDetailOfComapnyAndReview
}
