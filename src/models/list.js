const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    users:[{
        nickname: {
            type: String,
            required: true,
            minlength:3,
            maxlength:10
        }
    }],
    tasks:[{
        id: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true,
        },
        nickname: {
            type: String,
            required: true,
            minlength:3,
            maxlength:10
        },
        date: {
            type: Number,
            required: true
        }
    }]
})

const List = mongoose.model("List", listSchema)
module.exports = List