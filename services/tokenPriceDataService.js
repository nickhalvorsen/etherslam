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
}
