var ethHelper = require('../services/ethHelper');

exports.index = async function(req, res) {
    var addressData = await ethHelper.getAddressData(req.params.address);
  	res.render('address', { address: addressData });
};

