var express = require('express');
var router = express.Router();

router.get('/:address', function(req, res, next) {


var testAddressData = {
	address: req.params.address
	, ethBalance: 2.2
	, ethBalanceUsdEquivalent: 600.31
	, ethUsdPrice: 300.41
	, tokens: [
		{name: "token1", amount: 222}
		, {name: "token2", amount: 444}
	]
	, recentTransactions: [
		{ hash: "0x234234", from: "0x111ss2", to: "0x434991", amount: "349"}
		, { hash: "0x4848d", from: "0x111ss2", to: "0xdsrds", amount: "64"}
	]
}

  res.render('address', { address: testAddressData });
});

module.exports = router;
