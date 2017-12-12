const { Client } = require('pg');
const client = new Client();

module.exports = {
    GetAll: async function() {
        client.connect();
        var jj = await client.query("SELECT ID, SYMBOL FROM TOKEN"); 
        console.log(jj);
        client.end();
    }
}
