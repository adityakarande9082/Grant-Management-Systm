const mongoose = require("mongoose");

const facebookUserSchema = new mongoose.Schema({
    facebookId: String,
    displayName: String,
    image: String
}, { timestamps: true });

const FacebookUser = mongoose.model("FacebookUser", facebookUserSchema);

module.exports = FacebookUser;