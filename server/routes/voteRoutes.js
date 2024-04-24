// routes/voteRoutes.js
const express = require('express');
const router = express.Router();
const Vote = require('../models/Vote');
const Ballot = require('../models/Ballot');

// Cast a vote
router.post('/', async (req, res) => {
  const { userId, ballotId, choice } = req.body;
  try {
    // Ensure user hasn't already voted in this ballot
    const existingVote = await Vote.findOne({ user: userId, ballot: ballotId });
    if (existingVote) {
      return res.status(400).json({ message: 'User has already voted in this ballot' });
    }

    const vote = new Vote({ user: userId, ballot: ballotId, choice });
    await vote.save();
    res.status(201).json(vote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
