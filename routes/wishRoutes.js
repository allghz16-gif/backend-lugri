const express = require('express');
const router = express.Router();
const {
  getAllWishes,
  createWish,
  deleteWish,
} = require('../controllers/wishController');

router.get('/wishes', getAllWishes);
router.post('/wishes', createWish);
router.delete('/wishes/:id', deleteWish);

module.exports = router;