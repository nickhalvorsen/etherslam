var ethHelper = require('../services/ethHelper');

exports.index = function(req, res) {
    var transactionData = ethHelper.getTransactionData(req.params.transaction);
  	res.render('transaction', { address: transactionData });
};

