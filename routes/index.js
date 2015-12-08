'use strict';

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

let generateId = () => Math.round(Date.now() * Math.random());

let links = [
  {title: 'Google', url: 'https://google.com', id: generateId(), likedBy: {}},
  {title: 'XKCD', url: 'http://xkcd.com', id: generateId(), likedBy: {}},
  {title: 'Facebook', url: 'http://facebook.com', id: generateId(), likedBy: {}}
];

let findIndexById = id => {
  for (let i = 0; i < links.length; ++i) {
    if (links[i].id === id) return i;
  }
  return -1;
}

router.get('/api/links', function(req, res, next) {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  res.json({links: links, yourIp: ip});
});

router.post('/api/links', function(req, res, next) {
  let newLink = req.body;
  newLink.id = generateId();
  links.push(newLink);
  res.json(newLink);
});

router.delete('/api/links/:id', function(req, res, next) {
  let idToDelete = Number(req.params.id);
  links = links.filter(link => link.id !== idToDelete);
  res.json({deletedId: idToDelete});
});

router.put('/api/links', function(req, res, next) {
  let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let idToToggleLike = Number(req.body.id);

  // find by id and update
  let index = findIndexById(idToToggleLike);
  let toUpdate = links[index];
  let likedByThisIp = toUpdate.likedBy[ip];
  if (!likedByThisIp) {
    toUpdate.likedBy[ip] = true;
  } else {
    toUpdate.likedBy[ip] = false;
  }

  links[index] = toUpdate;

  res.json({id: idToToggleLike, likedByUser: toUpdate.likedBy[ip], yourIp: ip});
});

module.exports = router;



































