const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  address: String,
  title: String,
  content: String,
  citation: String,
}, {
  collection: 'notes' 
});

const Note = mongoose.model('Note', noteSchema);

// Create a new note
async function createNote(address, title, content, citation) {
  const newNote = new Note({ address, title, content, citation });
  return newNote.save();
}

// Get a single note by ID
async function getNoteById(noteId) {
  return Note.findById(noteId);
}

// Get all notes
async function getNotes() {
  try {
    const db = mongoose.connection.db;
    const notes = await db.collection('notes').find({}).toArray();
    return notes;
  } catch (error) {
    throw error;
  }
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
  Note: Note,
  createNote,
  getNoteById,
  getNotes,
  updateNote,
  deleteNote
};
