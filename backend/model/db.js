const pg = require('pg');
const pool = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'ridemyway',
    password: '123',
    port: '5432'
});
   