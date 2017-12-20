var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
  	res.render('token', { token: req.params.token });
};

