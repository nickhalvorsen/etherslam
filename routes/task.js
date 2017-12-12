var express = require('express');
var router = express.Router();

var taskController = require('../controllers/taskController')

router.get('/updateTokenPrices', taskController.updateTokenPrices);

module.exports = router;
