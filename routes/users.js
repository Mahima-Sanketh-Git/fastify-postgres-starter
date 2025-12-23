const users = async(fastify,options)=>{

    // post user data
    fastify.post("/users",async (request,reply) => {
        const {name,email} = request.body;
        try {
            const {rows} = await fastify.pg.query("INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",[name,email])
            return rows[0];
        } catch (error) {
            return reply.code(500).send({error:error});
        }
    });

    // get user data
    fastify.get("/users",async (request,reply) => {
        try {
            const {rows} = await fastify.pg.query("SELECT  * FROM users");
            return rows;
        } catch (error) {
            return reply.code(500).send({error:error});
        }
    });


    // put user data
    fastify.put("/users/:id",async (request,reply) => {
        const {id} = request.params;
        const {name} = request.body;
        try {
            const {rows} = await fastify.pg.query("UPDATE users SET name = $1 WHERE id = $2 RETURNING *",[name,id]);
            return rows[0];
        } catch (error) {
            return reply.code(500).send({error:error});
        }
    });

        // delete user data
    fastify.delete("/users/:id",async (request,reply) => {
        const {id} = request.params;
        try {
            const {rows} = await fastify.pg.query("DELETE FROM users WHERE id = $1 RETURNING *",[id]);
            return rows;
        } catch (error) {
            return reply.code(500).send({error:error});
        }
    });
}

export default users;