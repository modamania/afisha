module.exports = function(app) {
  var express = require('express');
  var eventsRouter = express.Router();

  eventsRouter.get('/', function(req, res) {
    res.send({
      'events': []
    });
  });

  eventsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  eventsRouter.get('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.put('/:id', function(req, res) {
    res.send({
      'events': {
        id: req.params.id
      }
    });
  });

  eventsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/events', eventsRouter);
};
