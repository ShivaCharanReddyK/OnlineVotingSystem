const mongoose = require('mongoose');

const ballotSchema = new mongoose.Schema({
  electionName: {
    type: String,
    required: true
  },
  candidates: [{
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  }],
  startDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Ballot = mongoose.model('Ballot', ballotSchema);
module.exports = Ballot;
