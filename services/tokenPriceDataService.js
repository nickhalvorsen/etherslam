const { Pool } = require('pg');
const pool = new Pool({
    database: 'etherslam'
    , user: 'etherslam'
    , password: 'icedtea'
    , port: 5432
});

module.exports = {
    GetAll: async function() {
        var result = await pool.query("SELECT ID, SYMBOL FROM TOKEN"); 
        return result.rows;
    }
    , Update: async function(tokenId, priceUsd) {
        var queryString = `INSERT INTO tokenPrice (tokenId, priceUsd) VALUES (${tokenId}, ${priceUsd}) ON CONFLICT (tokenId) DO UPDATE SET priceUsd = ${priceUsd}`;
        await pool.query(queryString);
    }
}
