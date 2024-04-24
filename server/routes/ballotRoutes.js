// routes/ballotRoutes.js
const express = require('express');
const router = express.Router();
const Ballot = require('../models/Ballot');

// Create a new ballot
router.post('/', async (req, res) => {
  const { electionName, candidates, startDate, endDate } = req.body;
  try {
    const newBallot = new Ballot({ electionName, candidates, startDate, endDate });
    await newBallot.save();
    res.status(201).json(newBallot);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all ballots
router.get('/', async (req, res) => {
  try {
    const ballots = await Ballot.find();
    res.json(ballots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
