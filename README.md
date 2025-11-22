# MERN Book Store

A simple MERN stack Book Store application scaffold.

## Stack
- MongoDB + Mongoose
- Express
- React (Vite)
- Node.js

## Backend

Env vars (`server/.env`):
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookstore
```

Install & run:
```
cd server
npm install
npm run dev
```

## Frontend
```
cd client
npm install
npm run dev
```
The dev server proxies API calls to the backend via `/api`.

## API Endpoints
- `GET /api/books` list (supports `search`, `category`, `page`, `limit`)
- `GET /api/books/:id` get one
- `POST /api/books` create
- `PUT /api/books/:id` update
- `DELETE /api/books/:id` remove

## Next Ideas
- Validation layer (e.g., zod / joi)
- Auth (JWT) & users
- Image upload (cover)
- Pagination UI
- Testing (Jest + Supertest)
- Docker compose (Mongo + app)
