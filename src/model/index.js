const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    title: String,
    filecodepath:String,
    thumnalpath : String
});

const cardcode = mongoose.model("cardcode",userSchema);

module.exports = cardcode;