const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: $$CLUSTER_TIME
});

// Model
const pwdDrive = mongoose.model('pwdDrive', BlogPostSchema);

module.exports =  pwdDrive;
