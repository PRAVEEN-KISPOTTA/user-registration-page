const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    image:{
        type: String,
        required: true
    },

    mobile:{
        type: String,
        required: true
    },

    is_Admin:{
        type: Number,
        required: true
    },

    is_varified:{
        type: Number,
        default: 0
    }
});

const user = mongoose.model("userData", userSchema);
module.exports = user;