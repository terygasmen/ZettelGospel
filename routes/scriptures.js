const express = require('express');
const router = express.Router();
const { Scripture } = require('../src/db/db');

// Get all scriptures
router.get('/scriptures', async (req, res) => {
  try {
    const scriptures = await Scripture.find();
    res.status(200).json(scriptures);
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a scripture by ID
router.get('/scriptures/:id', async (req, res) => {
  try {
    const scripture = await Scripture.findById(req.params.id);
    if (!scripture) {
      return res.status(404).json({ error: 'Scripture not found' });
    }
    res.status(200).json(scripture);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
