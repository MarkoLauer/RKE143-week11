const dotenv = require('dotenv');
dotenv.config();
const { Pool } = require('pg');

const itemsPool = new Pool ({
    connectionString: process.env.DBConnectionString, //lisasin ?ssl=true
    ssl: {
        rejectUnauthorized: false
}

});


// const itemsPool = new Pool({
//     user: 'postgres',
//     password: '490124',
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres'
// });

module.exports = itemsPool;