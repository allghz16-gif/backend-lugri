const express = require('express');
const cors = require('cors');
require('dotenv').config();

const wishRoutes = require('./routes/wishRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware CORS Manual yang Pasti Berhasil
app.use((req, res, next) => {
  const allowedOrigins = ['https://kemenlu-emub.vercel.app', 'http://localhost:5173'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  // Tangani langsung preflight request (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(express.json());