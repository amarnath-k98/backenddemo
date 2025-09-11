import mongoose from "mongoose";

export const verifyMongoId = (req, res, next) => {
    const { id } = req.params;
    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(400).json({
            status: "error",
            message: "Invalid user ID"
        });
    }
    next();
}