var express = require('express');
var ethHelper = require('../services/ethHelper');
var router = express.Router();

router.get('/:transaction', function(req, res, next) {

var testTransactionData = ethHelper.getTransactionData(req.params.transaction);

  res.render('transaction', { transaction: testTransactionData });
});

module.exports = router;
