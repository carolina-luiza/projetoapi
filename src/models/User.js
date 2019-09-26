const mongoose = require ("mongoose");

const Schema = new mongoose.Schema({
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
    createAt:{
        type: Date,
        default: Date.now
    }
})

mongoose.model('User', Schema);
//module.exports = model("User", Schema);