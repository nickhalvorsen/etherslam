var express = require('express');
var router = express.Router();

var blockTransactionsController = require('../controllers/blockTransactionsController')

router.get('/:block', blockTransactionsController.index);

module.exports = router;
