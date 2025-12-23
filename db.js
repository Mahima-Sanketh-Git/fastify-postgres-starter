import pkg from 'pg';

const {Pool} = pkg;

export const pool = new Pool({
host:"localhost",
port:5432,
user: 'postgres',
password: 'postgresSQLadmin', // replace this
database: 'fastify_pg'
});

pool.on('connect', () => console.log('✅ PostgreSQL connected'));
