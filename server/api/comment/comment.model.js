'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
    name: String,
    subject: String,
    description: String
});

module.exports = mongoose.model('Comment', CommentSchema);