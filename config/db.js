const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 4000, // Port wajib TiDB Cloud[cite: 7]
  ssl: {
    rejectUnauthorized: false // Menghindari error sertifikat TLS di server cloud[cite: 7]
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = db;