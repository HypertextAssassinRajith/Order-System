# Book Catalog and Simple Ordering System

This repository contains a full-stack JavaScript application with:

- **Frontend**: React + Vite + Tailwind CSS + Axios
- **Backend**: Node.js + Express
- **Database**: PostgreSQL + Prisma ORM

## Project Structure

```text
/backend
  /src
    index.js
    /routes
    /controllers
    /services
    /prisma
  /prisma
    schema.prisma
    seed.js
/frontend
  /src
    App.jsx
    /components
    /pages
```

## 1) Install dependencies

### Backend

```bash
cd /home/runner/work/Order-System/Order-System/backend
npm install
```

### Frontend

```bash
cd /home/runner/work/Order-System/Order-System/frontend
npm install
```

## 2) Configure environment

### Backend

```bash
cd /home/runner/work/Order-System/Order-System/backend
cp .env.example .env
```

Set `DATABASE_URL` in `.env` for your PostgreSQL instance.

### Frontend

```bash
cd /home/runner/work/Order-System/Order-System/frontend
cp .env.example .env
```

## 3) Prisma setup (migrate + generate + seed)

```bash
cd /home/runner/work/Order-System/Order-System/backend
npx prisma migrate dev --name init
npx prisma generate
node prisma/seed.js
```

## 4) Run backend

```bash
cd /home/runner/work/Order-System/Order-System/backend
npm run dev
```

Backend runs on `http://localhost:4000`.

## 5) Run frontend

```bash
cd /home/runner/work/Order-System/Order-System/frontend
npm run dev
```

Frontend runs on `http://localhost:5173`.

## API Endpoints

- `GET /api/books?category=top|new|lastMonth`
- `POST /api/orders`

### Order payload

```json
{
  "items": [
    { "bookId": "uuid", "qty": 2 }
  ]
}
```
