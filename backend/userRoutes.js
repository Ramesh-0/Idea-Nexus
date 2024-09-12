// routes/userRoutes.js
const express = require('express');
const User = require('../models/User'); // Import User model
const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password, institute, gender } = req.body;
  try {
    const user = new User({ username, email, password, institute, gender });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Signup failed' });
  }
});

// Login route (optional)
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: 'Login successful', user });
    } else {
      res.status(400).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

module.exports = router;
