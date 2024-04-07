const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String
});

const admin = mongoose.model("admin",userSchema);

module.exports = admin;