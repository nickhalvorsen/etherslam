var express = require('express');
var router = express.Router();

var blockController = require('../controllers/blockController')

router.get('/:block', blockController.index);

module.exports = router;
