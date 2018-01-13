var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
    var transactionData = await ethHelper.getBlockTransactionData(req.params.block);
    console.log(transactionData);
  	res.render('blockTransactions', { block: req.params.block, transactions: transactionData });
};

