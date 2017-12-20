const database = require('./query');

module.exports = {
    GetAll: async function() {
        var result = await database.query("SELECT ID, SYMBOL FROM TOKEN"); 
        return result.rows;
    }
    , Update: async function(tokenId, priceUsd) {
        var queryString = `INSERT INTO tokenPrice (tokenId, priceUsd) VALUES (${tokenId}, ${priceUsd}) ON CONFLICT (tokenId) DO UPDATE SET priceUsd = ${priceUsd}`;
        await database.query(queryString);
    }
    , GetPrice: async function(tokenName) {
        var queryString = `SELECT priceusd FROM TOKEN T LEFT JOIN TOKENPRICE TP ON T.ID = TP.TOKENID WHERE T.SYMBOL = '${tokenName}'`;
        var result = await database.query(queryString);
        return result.rows[0].priceusd;
    }
}
