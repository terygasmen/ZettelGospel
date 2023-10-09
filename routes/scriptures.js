const express = require('express');
const router = express.Router();
const { Scripture, getScripturesByVolumeBookChapter, getScriptureByVolumeBookChapterVerse } = require('../src/db/db');

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

// Get scriptures by volume, book, and chapter
router.get('/scriptures/:volume/:book/:chapter', async (req, res) => {
  try {
    const { volume, book, chapter } = req.params;
    const scriptures = await getScripturesByVolumeBookChapter(volume, book, parseInt(chapter, 10));
    res.status(200).json(scriptures);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a scripture by volume, book, chapter, and verse
router.get('/scriptures/:volume/:book/:chapter/:verse', async (req, res) => {
  try {
    const { volume, book, chapter, verse } = req.params;
    const scripture = await getScriptureByVolumeBookChapterVerse(volume, book, parseInt(chapter, 10), parseInt(verse, 10));
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
