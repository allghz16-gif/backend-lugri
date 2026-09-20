const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,      // Host dari TiDB Cloud
  user: process.env.DB_USER,      // User dari TiDB Cloud
  password: process.env.DB_PASS,  // Password dari TiDB Cloud
  database: process.env.DB_NAME,  // 'db_kemenlu_em'
  port: process.env.DB_PORT || 4000, // Port TiDB Cloud (biasanya 4000)
  ssl: {
    rejectUnauthorized: false     // Wajib ada untuk koneksi aman ke TiDB Cloud
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;