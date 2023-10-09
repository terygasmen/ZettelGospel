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

const scriptureSchema = new mongoose.Schema({
  volume_title: String,
  book_title: String,
  book_short_title: String,
  chapter_number: Number,
  verse_number: Number,
  verse_title: String,
  verse_short_title: String,
  scripture_text: String,
}, {
  collection: 'scriptures'
});

const Scripture = mongoose.model('Scripture', scriptureSchema);

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
  Note,
  Scripture,
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
};
