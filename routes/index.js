'use strict';

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

let generateId = () => Math.random() * Date.now();

let links = [
  {title: 'Google', url: 'https://google.com', id: generateId()},
  {title: 'XKCD', url: 'http://xkcd.com', id: generateId()},
  {title: 'Facebook', url: 'http://facebook.com', id: generateId()}
];

router.get('/api/links', function(req, res, next) {
  res.json({links: links});
});

router.post('/api/links', function(req, res, next) {
  let newLink = req.body;
  newLink.id = generateId();
  links.push(newLink);
  res.json(newLink);
});

module.exports = router;
