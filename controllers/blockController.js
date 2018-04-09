var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
    var blockData = await ethHelper.getBlockData(req.params.block);
  	res.render('block', { title: `Block ${req.params.block}`, block: blockData });
};

