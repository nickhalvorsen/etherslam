var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
    var blockData = await ethHelper.getBlockData(req.params.block);
  	res.render('block', { block: blockData });
};

