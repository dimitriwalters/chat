'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThreadSchema = new Schema({
    name: String,
    subject: String,
    comment: String
});

module.exports = mongoose.model('Thread', ThreadSchema);