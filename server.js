// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
import { pool } from './db.js';

const fastify = Fastify({
  logger: true
})

fastify.decorate('pg', pool);


// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 8000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()