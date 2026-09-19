const db = require('../config/db');

// GET: Ambil semua data harapan
const getAllWishes = async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM wishes WHERE is_approved = 1 ORDER BY created_at DESC LIMIT 20'
    );
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil data dari database' });
  }
};

// POST: Simpan harapan baru
const createWish = async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === '') {
    return res.status(400).json({ message: 'Teks harapan tidak boleh kosong!' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO wishes (text) VALUES (?)',
      [text]
    );

    res.status(201).json({
      message: 'Harapan berhasil dikirim!',
      data: { id: result.insertId, text },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menyimpan harapan' });
  }
};

// DELETE: Hapus harapan berdasarkan ID
const deleteWish = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM wishes WHERE id = ?', [id]);
    res.status(200).json({ message: 'Harapan berhasil dihapus!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal menghapus harapan' });
  }
};

module.exports = {
  getAllWishes,
  createWish,
  deleteWish,
};