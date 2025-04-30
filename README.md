# MotoServe - Bike Servicing Management API 🚲

MotoServe is a backend API that helps manage customers, bikes, and their servicing history in an organized and efficient way. It's designed to serve as the foundation for a full-stack bike servicing platform.

## 🌐 Live Backend

[🔗 Live link](https://your-live-link.com)

[🔗 Github link](https://github.com/opu183059/MotoServe_Backend)

## 🛠 Tech Stack

- **Node.js** with **Express.js** for the REST API
- **TypeScript** for type safety
- **Prisma ORM** with **PostgreSQL**

## Installation and Setup

1. Clone this repository: `git clone https://github.com/opu183059/MotoServe_Backend`
2. Install dependencies: `npm install`
3. Set up the environment variables by creating a `.env` file. Put `PORT=your-port DATABASE_URL=database-url` in the env file.
4. Generate prisma Client: `npx prisma generate`
5. Apply Prisma migrations: `npx prisma migrate dev`
6. Start the server: `npm run dev`
