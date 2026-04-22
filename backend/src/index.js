require('dotenv').config();
const express = require('express');
const cors = require('cors');
const booksRoutes = require('./routes/booksRoutes');
const ordersRoutes = require('./routes/ordersRoutes');

const app = express();
const PORT = process.env.PORT || 4000;
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const allowNoOrigin = process.env.CORS_ALLOW_NO_ORIGIN === 'true';

app.use(cors({
  origin(origin, callback) {
    if (!origin && allowNoOrigin) {
      callback(null, true);
      return;
    }

    if (origin && allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    const corsError = new Error('Not allowed by CORS');
    corsError.code = 'CORS_NOT_ALLOWED';
    callback(corsError);
  }
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/books', booksRoutes);
app.use('/api/orders', ordersRoutes);

app.use((err, req, res, next) => {
  if (err?.code === 'CORS_NOT_ALLOWED') {
    res.status(403).json({ message: 'Not allowed by CORS' });
    return;
  }

  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
