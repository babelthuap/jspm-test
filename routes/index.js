'use strict';

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

let generateId = () => Math.round(Math.random() * Date.now());

let links = [
  {title: 'Fake Link 1', url: 'fake.url.1', id: generateId()},
  {title: 'Fake Link 2', url: 'fake.url.2', id: generateId()},
  {title: 'Fake Link 3', url: 'fake.url.3', id: generateId()}
];

router.get('/api/links', function(req, res, next) {
  res.json({links: links});
});

router.post('/api/links', function(req, res, next) {
  let newLink = req.body;
  links.push(newLink);
  res.json(newLink);
});

module.exports = router;
