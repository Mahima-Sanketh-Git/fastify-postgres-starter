import pkg from 'pg';

const {Pool} = pkg;

export const pool = new Pool({
host:"localhost",
port:5432, // use your port
user: 'postgres', // use your user name 
password: 'postgresSQLadmin', // replace this with your password
database: 'fastify_pg' // use your database name
});

pool.on('connect', (client) => console.log('PostgreSQL connected.',client.database));


