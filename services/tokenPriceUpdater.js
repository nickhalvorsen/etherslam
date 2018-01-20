global.fetch = require('node-fetch');
const cryptocompare = require('cryptocompare');
const tokenDataService = require('./tokenDataService');

module.exports = {
    updateAll: async function() {

        var allTokens = await tokenDataService.getAll();    

        var batchSize = 10; // update 10 tokens at a time
        var batches = [];

        while (allTokens.length > 0) {
            batches.push(allTokens.splice(0, batchSize));
        }

        updateAllBatches(batches);
    }
}

async function updateAllBatches(batches) {

    for (var i = 0; i < batches.length; i++) {
        await updateBatch(batches[i]);
    }
}

async function updateBatch(batch) {
    var tokens = batch;
    var tokenSymbols = batch.map(x => x.symbol);
    var prices = await cryptocompare.priceMulti(tokenSymbols, ['USD']);

    for (var symbol in prices) {
        for (var i = 0; i < tokens.length; i++) {
            if (tokens[i].symbol == symbol) {
                tokens[i].priceUsd = prices[symbol].USD;
            }
        }
    }

    for (var i = 0; i < tokens.length; i++) {
        console.log(`Updating ${tokens[i].symbol} price: $${tokens[i].priceUsd}`);
        tokenDataService.update(tokens[i].id, tokens[i].priceUsd);
    }
}


