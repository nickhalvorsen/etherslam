const database = require('./query');

module.exports = {
    getTransactions: async function(address, offset, count) {
        var result = await database.query(`SELECT * FROM transaction WHERE LOWER(toAddress) = LOWER('${address}') OR LOWER(fromAddress) = LOWER('${address}') ORDER BY block DESC LIMIT ${count} OFFSET ${offset}`);
        return result.rows;
    },
    getTransactionCount: async function(address) {
        var result = await database.query(`SELECT COUNT(*) FROM transaction WHERE LOWER(toAddress) = LOWER('${address}') OR LOWER(fromAddress) = LOWER('${address}')`);
        return result.rows[0].count;
    }
    , getTransaction: async function(hash) {
        var result = await database.query(`SELECT * FROM transaction WHERE LOWER(hash) = LOWER('${hash}') ORDER BY block DESC`);
        return result.rows[0];
    }
}
