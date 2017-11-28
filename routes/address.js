var express = require('express');
var router = express.Router();

router.get('/:address', function(req, res, next) {

var testTokens = [{name: "token1", amount: 222}, {name: "token2", amount: 444}];
var testTransactions = [
{ hash: "0x234234", from: "0x111ss2", to: "0x434991", amount: "349"}
,{ hash: "0x4848d", from: "0x111ss2", to: "0xdsrds", amount: "64"}
]

  res.render('address', { address: req.params.address, tokens: testTokens, transactions: testTransactions });
});

module.exports = router;
