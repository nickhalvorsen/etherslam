var express = require('express');
var router = express.Router();

var addressController = require('../controllers/addressController')

router.get('/:address', addressController.index);

module.exports = router;
