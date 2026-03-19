# Fastify PostgreSQL Starter

A lightweight REST API starter project built with [Fastify](https://fastify.dev/) and [PostgreSQL](https://www.postgresql.org/). This template provides a solid foundation for building fast, low-overhead Node.js APIs backed by a relational database.

---

## Features

- ⚡ **High-performance API** powered by Fastify (one of the fastest Node.js web frameworks)
- 🐘 **PostgreSQL integration** via the `pg` connection pool
- 🔄 **Full CRUD operations** for a `users` resource out of the box
- 🪵 **Built-in structured logging** using Fastify's pino logger
- 🔌 **Modular route registration** with Fastify plugins
- 🔁 **Hot-reloading** in development with nodemon

---

## Tech Stack

| Technology | Version |
|------------|---------|
| [Node.js](https://nodejs.org/) | ≥ 18.x |
| [Fastify](https://fastify.dev/) | ^5.6.2 |
| [PostgreSQL](https://www.postgresql.org/) | ≥ 13 |
| [node-postgres (pg)](https://node-postgres.com/) | ^8.16.3 |
| JavaScript (ESM) | ES2022+ |

---

## Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** v18 or higher – [Download](https://nodejs.org/en/download)
- **npm** v8 or higher (included with Node.js)
- **PostgreSQL** v13 or higher – [Download](https://www.postgresql.org/download/)

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mahima-Sanketh-Git/fastify-postgres-starter.git
   cd fastify-postgres-starter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

---

## Database Configuration & Setup

1. **Create a PostgreSQL database**

   ```sql
   CREATE DATABASE fastify_pg;
   ```

2. **Create the `users` table** inside the `fastify_pg` database

   ```sql
   \c fastify_pg

   CREATE TABLE users (
     id    SERIAL PRIMARY KEY,
     name  VARCHAR(100) NOT NULL,
     email VARCHAR(150) UNIQUE NOT NULL
   );
   ```

3. **Update database credentials** in `db.js` to match your local PostgreSQL setup:

   ```js
   export const pool = new Pool({
     host:     "localhost",
     port:     5432,          // your PostgreSQL port
     user:     "postgres",    // your PostgreSQL username
     password: "your_password", // your PostgreSQL password
     database: "fastify_pg",  // your database name
   });
   ```

---

## Environment Variables Setup

For production or team environments, it is recommended to move sensitive credentials out of source code and into environment variables. Create a `.env` file in the project root:

```env
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=your_password
PG_DATABASE=fastify_pg
PORT=8000
```

> **Note:** Add `.env` to your `.gitignore` so credentials are never committed.

---

## Quick Start

**Development** (with hot-reload via nodemon):

```bash
npm run dev
```

**Production**:

```bash
npm start
```

The server starts on **http://localhost:8000** by default.

You should see the following log message when the database connects:

```
PostgreSQL connected. fastify_pg
```

---

## Project Structure

```
fastify-postgres-starter/
├── db.js            # PostgreSQL connection pool setup
├── server.js        # Fastify server entry point & route registration
├── routes/
│   └── users.js     # CRUD routes for the /users resource
├── package.json     # Project metadata & scripts
└── README.md
```

---

## API Endpoints

All endpoints are prefixed with `http://localhost:8000`.

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/`      | Returns `{ "hello": "world" }` |

### Users Resource

| Method   | Endpoint      | Description            |
|----------|---------------|------------------------|
| `GET`    | `/users`      | Retrieve all users     |
| `POST`   | `/users`      | Create a new user      |
| `PUT`    | `/users/:id`  | Update a user by ID (supports `name`) |
| `DELETE` | `/users/:id`  | Delete a user          |

#### Examples

**GET /users** – Retrieve all users

```bash
curl http://localhost:8000/users
```

```json
[
  { "id": 1, "name": "Alice", "email": "alice@example.com" },
  { "id": 2, "name": "Bob",   "email": "bob@example.com" }
]
```

---

**POST /users** – Create a new user

```bash
curl -X POST http://localhost:8000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```

```json
{ "id": 1, "name": "Alice", "email": "alice@example.com" }
```

---

**PUT /users/:id** – Update a user's name

```bash
curl -X PUT http://localhost:8000/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice Updated"}'
```

```json
{ "id": 1, "name": "Alice Updated", "email": "alice@example.com" }
```

---

**DELETE /users/:id** – Delete a user

```bash
curl -X DELETE http://localhost:8000/users/1
```

```json
[{ "id": 1, "name": "Alice Updated", "email": "alice@example.com" }]
```

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request against `main`

Please make sure your code follows the existing code style and that all existing functionality continues to work.

---

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
