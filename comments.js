// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comment', {useNewUrlParser: true, useUnifiedTopology: true});

// Create schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});
const Comment = mongoose.model('Comment', commentSchema);

// Get data from form
app.use(express.urlencoded({extended: true}));