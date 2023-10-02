const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://terygasmen-cit490:Folie_31415@cluster0.tsmiomx.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Handle database connection events
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const noteSchema = new mongoose.Schema({
  address: String,
  title: String,
  content: String,
  citation: String,
});

module.exports = mongoose.model('Note', noteSchema);
