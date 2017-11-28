var ethHelper = require('../services/ethHelper');


exports.index = function(req, res) {
    var addressData = ethHelper.getAddressData(req.params.address);
  	res.render('address', { address: addressData });
};

