var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ 'title': 'v1 Express' });
});

router.use('/user', require('./user.route'));

module.exports = router;
