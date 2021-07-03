var express = require('express');
var router = express.Router();

const controller = require('../../controller/v1/user.controller');

router.route('/')
  .get(controller.get)

module.exports = router;