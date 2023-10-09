const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/notes');
const scriptureRoutes = require('./routes/scriptures');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://terygasmen-cit490:Folie_31415@cluster0.tsmiomx.mongodb.net/zettelgospel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // API endpoints for notes
  app.use('/api/notes', noteRoutes);
  
  // API endpoints for scriptures
  app.use('/api/scriptures', scriptureRoutes);

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
