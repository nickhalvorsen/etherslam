const database = require('./query');

module.exports = {
    getTransactions: async function(address) {
        var result = await database.query(`SELECT * FROM transaction WHERE toAddress = '${address}' OR fromAddress = '${address}' ORDER BY block DESC`);
        return result.rows;
    }
}
