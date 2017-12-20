var express = require('express');
var router = express.Router();

var tokenController = require('../controllers/tokenController')

router.get('/:token', tokenController.index);

module.exports = router;
