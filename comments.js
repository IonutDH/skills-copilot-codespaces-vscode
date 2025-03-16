// Create web server
// Start web server
// Create a comments array
// Create a GET route to get all comments
// Create a POST route to add a comment
// Create a DELETE route to delete a comment
// Create a PUT route to edit a comment
// Create a GET route to get a comment by id

// Required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Create a comments array
let comments = [
  {
    id: 1,