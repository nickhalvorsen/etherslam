var ethHelper = require('../services/ethHelper');
var tokenDataService = require('../services/tokenPriceDataService.js');

exports.details = async function(req, res) {
    var tokenData = await tokenDataService.getTokenData(req.params.token);
    console.log(tokenData);
    res.render('token', { token: tokenData });
};

exports.index = async function(req, res) {
    var allTokenData = await tokenDataService.getAllTokenData();
    res.render('allTokens', { tokens: allTokenData });
}

