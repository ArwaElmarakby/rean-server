const express = require('express');
const { signup, login, getAllUsers } = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', protect, admin, getAllUsers);

module.exports = router;
