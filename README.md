# Backend Practice Project

A robust backend system built with Node.js, Express, TypeScript, PostgreSQL, and Drizzle ORM. This project includes features for managing events and event registrations.

## Features

- **TypeScript** integration for type safety
- **Express.js** RESTful API setup
- **Drizzle ORM** for database interaction and migrations
- **PostgreSQL** database connection
- **Events & Registrations** schemas and API routes
- **Authentication Ready** (includes `bcryptjs` and `jsonwebtoken` dependencies)

## Prerequisites

- Node.js (v18 or higher recommended)
- PostgreSQL installed and running

## Cloning the Repository

To get a local copy up and running, follow these simple steps:

```bash
git clone https://github.com/somya113/Backend__Project.git
cd Backend__Project
```

## Installation

1. Install the NPM dependencies:
```bash
npm install
```

2. Set up your environment variables:
Create a `.env` file in the root directory (ensure this file is not tracked by Git). Add the following placeholder values and update them with your local credentials:
```env
DATABASE_URL=postgres://username:password@localhost:5432/your_database_name
PORT=3000
# JWT_SECRET=your_secret_key
```

## Database Management (Drizzle ORM)

You can run the following commands to manage your database:

- **Push schema to the database:**
  ```bash
  npm run db:push
  ```
- **Run migrations:**
  ```bash
  npm run db:migrate
  ```
- **Open Drizzle Studio (Database GUI):**
  ```bash
  npm run db:studio
  ```

## Running the Application

- **Development Mode:**
  ```bash
  npm run dev
  ```
  This will start the server using `ts-node-dev` with hot-reloading.

- **Build for Production:**
  ```bash
  npm run build
  ```

- **Run Tests:**
  ```bash
  npm run test:crud
  ```

## Project Structure

- `src/db/schema.ts` - Database tables definitions (e.g., `practiceEvents`, `practiceEventsRegistrations`)
- `src/routes/` - Express route handlers for events and registrations
- `src/controllers/` - API request and response logic
- `src/middlewares/` - Express middlewares
- `src/repository/` - Database interaction layer
- `src/server.ts` - Main entry point

## Author
Somya Tomar
