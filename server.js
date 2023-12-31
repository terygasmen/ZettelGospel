const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors middleware
const noteRoutes = require('./routes/notes');
const path = require('path');

const app = express();
app.use(cors()); // Enable CORS for all routes
// Middleware to parse JSON data in the request body
app.use(express.json());
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('process.env.MONGODB_URI', {
  useNewUrlParser: true,
  useUnifiedTopology: true
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
