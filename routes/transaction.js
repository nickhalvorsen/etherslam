var express = require('express');
var router = express.Router();

router.get('/:transaction', function(req, res, next) {

var testStatus = 'success';
var testBlock = '414242';
var testTimeStamp = '04:30 44/33/22';
var testFromAddress = '0x34097834891';
var testToAddress = '0x23948273948s';
var testAmount = '39.33';

  res.render('transaction', { transaction: req.params.transaction, status: testStatus, block: testBlock, timeStamp: testTimeStamp
  , fromAddress: testFromAddress, toAddress: testToAddress, amount: testAmount });
});

module.exports = router;
