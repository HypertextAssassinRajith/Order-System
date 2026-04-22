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

## Deployment

### Frontend (GitHub Pages)

- The workflow `.github/workflows/deploy-frontend-pages.yml` deploys the `frontend` app to GitHub Pages on pushes to `main`.
- In repository settings, enable **Pages** and set **Build and deployment** source to **GitHub Actions**.
- Add repository secret `VITE_API_BASE_URL` with your deployed backend URL (for example `https://your-backend.example.com`).

### Backend (Node host)

- Deploy `/backend` to a Node-capable host (for example Render/Railway/Fly/EC2).
- Configure backend environment variables:
  - `DATABASE_URL`
  - `PORT` (optional, host can provide this)
  - `CORS_ORIGIN` (comma-separated allowed frontend origins, for example `https://<user>.github.io,http://localhost:5173`)
  - `CORS_ALLOW_NO_ORIGIN` (`true` to allow requests without `Origin` header, default `false`)
- Optional: set repository secret `BACKEND_DEPLOY_HOOK_URL` to enable `.github/workflows/deploy-backend-hook.yml`, which triggers your hosting provider deploy hook on backend changes.

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
