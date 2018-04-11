var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
    var latestBlock = await ethHelper.getLatestBlock();
    var recentBlockSummary = await ethHelper.getRecentBlocks(8);
  	res.render('index', { title: 'Etherslam - Ethereum Blockchain Explorer', latestBlock: latestBlock, recentBlocks: recentBlockSummary});
};

