global.fetch = require('node-fetch');
const cc = require('cryptocompare');
const tokenPriceDataService = require('./tokenPriceDataService');

module.exports = {
    updateAll: function() {

        console.log("getting tokens to update");

        var tokensToUpdate = tokenPriceDataService.GetAll();    

        console.log("got");
        var batchSize = 10; // update 10 tokens at a time
        var updateBatches = [];

        while (tokensToUpdate.length > 0) {
            updateBatches.push(tokensToUpdate.splice(0, batchSize));
        }

        console.log(updateBatches);

    }
}

function updateTokens(tokens) {
    console.log("updateTokens");
}
