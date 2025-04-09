// Create web server
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Comment = require('./models/comment');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Comment model
const commentSchema = new mongoose.Schema({
  name: String,
  email: String,
  text: String,
});

const CommentModel = mongoose.model('Comment', commentSchema);

// Routes
app.post('/comments', async (req, res) => {
  const { name, email, text } = req.body;
  const comment = new CommentModel({ name, email, text });
  await comment.save();
  res.status(201).send(comment);
});

app.get('/comments', async (req, res) => {
  const comments = await CommentModel.find();
  res.status(200).send(comments);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
