var express = require('express');
var router = express.Router();

var transactionController = require('../controllers/transactionController')



router.get('/:transaction', transactionController.index);


module.exports = router;
