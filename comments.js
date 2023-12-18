// Create web server
//const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4001;
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'comments.json');

// Use body-parser and cors middleware
app.use(bodyParser.json());
app.use(cors());

// Read comments file
let comments = [];
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    comments = JSON.parse(data);
  }
});

// GET: Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST: Add a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  fs.writeFile(filePath, JSON.stringify(comments), err => {
    if (err) {
      console.error(err);
    } else {
      res.json(comments);
    }
  });
});

// PUT: Update a comment
app.put('/comments/:id', (req, res) => {
  const id = req.params.id;
  const updatedComment = req.body;
  comments = comments.map(comment => {
    if (comment.id === id) {
      return updatedComment;
    } else {
      return comment;
    }
  });
  fs.writeFile(filePath, JSON.stringify(comments), err => {
    if (err) {
      console.error(err);
    } else {
      res.json(comments);
    }
  });
});

// DELETE: Delete a comment
app.delete('/comments/:id', (req, res) => {
  const id = req.params.id;
  comments = comments.filter(comment => comment.id !== id);
  fs.writeFile(filePath, JSON.stringify(comments), err => {
    if (err) {
      console.error(err);
    } else {
      res.json(comments);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});