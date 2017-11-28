var express = require('express');
var ethHelper = require('../services/ethHelper');
var router = express.Router();

router.get('/:address', function(req, res, next) {


var testAddressData = ethHelper.getAddressData(req.params.address);

  res.render('address', { address: testAddressData });
});

module.exports = router;
