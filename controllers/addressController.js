var ethHelper = require('../services/ethHelper');

var pageSize = 25;

exports.index = async function(req, res) {
    if (req.query.page === undefined) {
        req.query.page = 1;

    }
    var addressData = await ethHelper.getAddressData(req.params.address, req.query.page, pageSize);
  	res.render('address', { title: `Address ${req.params.address}`, address: addressData, page: req.query.page });
};

