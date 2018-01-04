var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
    var transactionData = await ethHelper.getTransactionData(req.params.transaction);
  	res.render('transaction', { transaction: transactionData });
};

