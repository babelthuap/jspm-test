'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [
  {title: 'Fake Link 1', url: 'fake.url.1', id: Math.round(Math.random() * Date.now())},
  {title: 'Fake Link 2', url: 'fake.url.2', id: Math.round(Math.random() * Date.now())},
  {title: 'Fake Link 3', url: 'fake.url.3', id: Math.round(Math.random() * Date.now())}
];

router.get('/api/links', function(req, res, next) {
  res.json({links: links});
});

router.post('/api/links', function(req, res, next) {
  var newLink = req.body;
  links.push(newLink);
  res.json(newLink);
});

module.exports = router;
