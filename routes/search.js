var express = require('express');
var router = express.Router();

var searchHelper = require('../services/searchHelper')
var searchController = require('../controllers/searchController');
var addressController = require('../controllers/addressController')
var transactionController = require('../controllers/transactionController')
var blockController = require('../controllers/blockController')

function handleSearch(req, res, next) {

    var searchQuery = req.query.s;

    if (searchHelper.looksLikeAddress(searchQuery)) {
        res.redirect('/address/' + searchQuery);
    }

    if (searchHelper.looksLikeTransactionHash(searchQuery)) {
        res.redirect('/transaction/' + searchQuery);
    }

    if (searchHelper.looksLikeBlockNumber(searchQuery)) {
        res.redirect('/block/' + searchQuery);
    }

    return searchController.index(req, res, next);
}

router.get('/', handleSearch);

module.exports = router;
