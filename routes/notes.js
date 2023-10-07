const express = require('express');
const router = express.Router();
const { Note } = require('../src/db/db');

// Create a new note
router.post('/notes', async (req, res) => {
  try {
    const { address, title, content, citation } = req.body;
    const newNote = new Note({ address, title, content, citation });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all notes
router.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a note by ID
router.put('/notes/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a note by ID
router.delete('/notes/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error); // Log the actual error for debugging
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
