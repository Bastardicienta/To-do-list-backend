const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
        minlength:3,
        maxlength:10
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User