'use strict';

var _ = require('lodash');
var Thread = require('./thread.model');

// Get list of threads
exports.index = function(req, res) {
  Thread.find(function (err, threads) {
    if(err) { return handleError(res, err); }
    return res.json(200, threads);
  });
};

// Get a single thread
exports.show = function(req, res) {
  Thread.findById(req.params.id, function (err, thread) {
    if(err) { return handleError(res, err); }
    if(!thread) { return res.send(404); }
    return res.json(thread);
  });
};

// Creates a new thread in the DB.
exports.create = function(req, res) {
  Thread.create(req.body, function(err, thread) {
    if(err) { return handleError(res, err); }
    return res.json(201, thread);
  });
};

// Updates an existing thread in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Thread.findById(req.params.id, function (err, thread) {
    if (err) { return handleError(res, err); }
    if(!thread) { return res.send(404); }
    var updated = _.merge(thread, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, thread);
    });
  });
};

// Deletes a thread from the DB.
exports.destroy = function(req, res) {
  Thread.findById(req.params.id, function (err, thread) {
    if(err) { return handleError(res, err); }
    if(!thread) { return res.send(404); }
    thread.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}