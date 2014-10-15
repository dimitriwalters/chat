'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThreadSchema = new Schema({
    name: String,
    subject: String,
    comment: String,
    commentId: Number,
    createdAt: Date,
    replies: [{
        name: String,
        comment: String,
        commentId: Number,
        createdAt: Date
    }],
    lastUpdatedAt: Date
});

module.exports = mongoose.model('Thread', ThreadSchema);