const mongoose = require('mongoose');

const twitterUserSchema = new mongoose.Schema({
    twitterId: String,
    displayName: String,
    username: String,
    image:String
    // Add more fields as needed
}, { timestamps: true });

const TwitterUser = mongoose.model("TwitterUser", twitterUserSchema);

module.exports = TwitterUser;
