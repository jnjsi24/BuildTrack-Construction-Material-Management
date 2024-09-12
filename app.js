const express = require('express');
const app = express();

// Define a new route
app.get('/about', (req, res) => {
  res.send('About Us page for BuildTrack');
});

// Update the existing route
app.get('/', (req, res) => {
  res.send('Welcome to BuildTrack: Construction Material Management');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
