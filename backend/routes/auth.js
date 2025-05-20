const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ msg: 'All fields required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  db.query(
    'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)',
    [fullName, email, hashedPassword],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: 'User already exists or error occurred' });
      }
      res.status(201).json({ msg: 'User registered successfully' });
    }
  );
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, results) => {
      if (err || results.length === 0) {
        return res.status(401).json({ msg: 'Invalid email or user not found' });
      }

      const valid = await bcrypt.compare(password, results[0].password);

      if (!valid) return res.status(401).json({ msg: 'Invalid password' });

      res.status(200).json({ msg: 'Login successful', user: results[0] });
    }
  );
});

module.exports = router;
