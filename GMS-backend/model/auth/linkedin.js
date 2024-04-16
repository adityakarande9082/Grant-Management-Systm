const mongoose = require("mongoose");

const linkedInUserSchema = new mongoose.Schema({
    linkedInId: String,
    displayName: String,
    image: String
}, { timestamps: true });

const LinkedInUser = mongoose.model("LinkedInUser", linkedInUserSchema);

module.exports = LinkedInUser;