const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/notes');
const path = require('path');

const app = express();
// Middleware to parse JSON data in the request body
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb+srv://terygasmen-cit490:Folie_31415@cluster0.tsmiomx.mongodb.net/zettelgospel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // API endpoints for notes
  app.use('/api', noteRoutes);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
