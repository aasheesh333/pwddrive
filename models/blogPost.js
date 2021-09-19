const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

// Model
const pwdDrive = mongoose.model('pwdDrive', BlogPostSchema);

module.exports =  pwdDrive;
