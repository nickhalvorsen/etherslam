var ethHelper = require('../services/ethHelper');
var tokenDataService = require('../services/tokenDataService.js');

exports.details = async function(req, res) {
    var tokenData = await tokenDataService.getTokenData(req.params.token);
    res.render('token', { title: `${req.params.token} token`, token: tokenData });
};

exports.index = async function(req, res) {
    var allTokenData = await tokenDataService.getAllTokenData();
    res.render('allTokens', { title: 'Tokens', tokens: allTokenData });
}

