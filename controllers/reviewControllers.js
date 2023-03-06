const reviewModelSchema = require("../models/reviewModelSchema")
const addReview = async (req, res) => {
    try {
        const isReviewExists = await reviewModelSchema.findOne({ user_id: req.body.user_id });
        if (isReviewExists) {
            res.status(409).json({
                status: "failure",
                message: " Review already exists you can give another review",
            });
        } else {
            const addReview = await new reviewModelSchema(req.body)
            try {
                addReview.save();
                res.status(201).json({
                    success: "success",
                    message: "Thanku for your review.Your revivew added Successfully"
                });
            } catch (err) {
                res.status(400).json({
                    Success: "failure",
                    message: "Error occur" + err.message
                });
            }
        }
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "Error occur" + err.message
        });
    }
}
//Crud Operation in review........................................................................
const editReview = async (req, res) => {
    const id = req.params;
    try {
        const updateReview = await reviewModelSchema.findByIdAndUpdate(id, { $set: req.body });
        updateReview.save();
        res.status(201).json({
            success: "success",
            message: "Thanku for your review.Your review edited successfully"
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "error occur" + err.message
        });
    }
}
// To delete the review API....................................................................
const deleteReview = async (req, res) => {
    const id = req.params;
    try {
        const deleteReview = await reviewModelSchema.findByIdAndDelete(id, { $set: req.body });
     
        res.status(201).json({
            success: "success",
            message: "Thank you your review deleted Successfully"
        });
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "error occur" + err.message
        });
    }
}
//API to find review list ..........................................................................
const findReviewList = async (req, res) => {
    try {
        const listReview = await reviewModelSchema.find();
        res.status(201).json({
            success: "success",
            message: "Thanku your review list is shown here",
            data: listReview
        });
    } catch (err) {
        res.status(400).json({
            Success: "failure",
            message: "error occur" + err.message
        });
    }
}
//API to find reviews detail ...........................................................................
const reviewDetail = async (req, res) => {
    const id = req.params.id
    try {
        const findDetail = await reviewModelSchema.findOne({ id: id })
            .populate({
                path: "company_id",
                select: "companyName location city foundedOn"
            }).populate({
                path: "user_id",
                select: "userName city profilePic"
            })
        res.status(201).json({
            success: "success",
            message: "Here is the detail of given review",
            data: findDetail
        });
    } catch (err) {
        res.status(400).json({
            success: "failure",
            message: "Error occur" + err.message
        });
    }
}

module.exports = {
    addReview,
    editReview,
    deleteReview,
    findReviewList,
    reviewDetail

}
