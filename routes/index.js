var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brier Hill' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Brier Hill' });
});

/* GET home page. */
router.get('/submit', function(req, res, next) {
  // res.render('index', { title: 'OhioTakeOut' });
  res.send('future page for submitting music');
});

module.exports = router;
