const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  address: String,
  title: String,
  content: String,
  citation: String,
});

const Note = mongoose.model('Note', noteSchema);

// Create a new note
async function createNote(address, title, content, citation) {
  const newNote = new Note({ address, title, content, citation });
  return newNote.save();
}

// Get all notes
async function getNotes() {
  return Note.find({});
}

// Get a single note by ID
async function getNoteById(noteId) {
  return Note.findById(noteId);
}

// Update a note by ID
async function updateNote(noteId, updatedData) {
  return Note.findByIdAndUpdate(noteId, updatedData, { new: true });
}

// Delete a note by ID
async function deleteNote(noteId) {
  return Note.findByIdAndRemove(noteId);
}

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
