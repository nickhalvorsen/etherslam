const database = require('./query');

module.exports = {
    getTransactions: async function(address, txOffset) {
        var result = await database.query(`SELECT * FROM transaction WHERE LOWER(toAddress) = LOWER('${address}') OR LOWER(fromAddress) = LOWER('${address}') ORDER BY block DESC LIMIT 100 OFFSET ${txOffset}`);
        return result.rows;
    }
    , getTransaction: async function(hash) {
        var result = await database.query(`SELECT * FROM transaction WHERE hash = '${hash}' ORDER BY block DESC`);
        return result.rows[0];
    }
}
