const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  address: String,
  title: String,
  content: String,
  citation: String,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
