// backend/routes/contact.js
const express = require('express');
const router = express.Router();

// POST /api/contact
router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  // For now, just log the data
  console.log('Contact Form Submission:', { name, email, message });

  // Respond with success
  res.status(200).json({ message: 'Message received' });
});

module.exports = router;
