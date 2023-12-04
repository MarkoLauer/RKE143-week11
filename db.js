const { Pool } = require('pg');

const itemsPool = new Pool({
    user: 'postgres',
    password: '490124',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = itemsPool;