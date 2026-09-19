const express = require('express');
const cors = require('cors');
require('dotenv').config();

const wishRoutes = require('./routes/wishRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes API
app.use('/api', wishRoutes);

// Test Endpoint Root
app.get('/', (req, res) => {
  res.send('API Backend Express.js Kemenlu EM UB Running...');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server Express berjalan di http://localhost:${PORT}`);
});