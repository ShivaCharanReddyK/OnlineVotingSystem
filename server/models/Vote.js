const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ballot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ballot',
    required: true
  },
  choice: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Vote = mongoose.model('Vote', voteSchema);
module.exports = Vote;
