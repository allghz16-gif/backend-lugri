const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes API Anda
const wishRoutes = require('../routes/wishRoutes'); // sesuaikan path relatif jika folder berbeda
app.use('/api', wishRoutes);

app.get('/', (req, res) => {
  res.send('API Backend Express.js Kemenlu EM UB Running...');
});

// Ekspor sebagai handler Netlify Serverless
module.exports.handler = serverless(app);