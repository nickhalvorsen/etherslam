var tokenPriceUpdater = require('../services/tokenPriceUpdater');

exports.updateTokenPrices = async function(req, res) {
    tokenPriceUpdater.updateAll();
  	res.render('index');
};

