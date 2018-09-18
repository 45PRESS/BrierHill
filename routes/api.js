var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/add', function(req, res, next) {
    res.render('add', { title: 'Brier Hill' });
  });

  /* GET about page. */
router.get('/artists', function(req, res, next) {
    res.render('artists', { title: 'Brier Hill' });
  });


/* GET about page. */
router.get('/', function(req, res, next) {
    res.send('not available');
  });

  
module.exports = router;
