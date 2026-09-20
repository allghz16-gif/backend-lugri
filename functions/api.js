const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();

const app = express();

// CORS manual dengan whitelist origin
app.use((req, res, next) => {
  const allowedOrigins = [
    'https://kemenlugri-emub.vercel.app',
    'http://localhost:5173',
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Vary', 'Origin');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

// Routes API
const wishRoutes = require('../routes/wishRoutes');
app.use('/api', wishRoutes);
app.use('/', wishRoutes); // jaga-jaga kalau path setelah redirect Netlify berbeda

app.get('/', (req, res) => {
  res.send('API Backend Express.js Kemenlu EM UB Running...');
});

module.exports.handler = serverless(app);