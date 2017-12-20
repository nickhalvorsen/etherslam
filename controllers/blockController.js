var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
  	res.render('block', { block: req.params.block });
};

