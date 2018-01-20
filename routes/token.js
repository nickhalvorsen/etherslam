var express = require('express');
var router = express.Router();

var tokenController = require('../controllers/tokenController')

router.get('/', tokenController.index);
router.get('/:token', tokenController.details);

module.exports = router;
