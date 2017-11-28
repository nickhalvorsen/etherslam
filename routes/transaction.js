var express = require('express');
var router = express.Router();

router.get('/:transaction', function(req, res, next) {

var testTransactionData = {
	hash: req.params.transaction
	, status: 'success'
	, block: '414232'
	, testTimeStamp: '04:30 44/33/22'
	, fromAddress: '0x320478962039486723423435566'
	, toAddress: '0x039987098d70987394872395873'
	, amount: '30.44'
}

  res.render('transaction', { transaction: testTransactionData });
});

module.exports = router;
