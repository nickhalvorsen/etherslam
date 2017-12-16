const pg = require('pg');
const pool = new pg.Pool({
    database: 'etherslam'
    , user: 'etherslam'
    , password: 'icedtea'
    , port: 5432
    , max: 20
});

module.exports = pool;
