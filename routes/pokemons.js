const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemons');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');

// @route     GET api/pokemons
// @desc      Show all pokemons
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const pokemons = await Pokemon.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(pokemons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/pokemons
// @desc      Add a pokemon
// @access    Private
router.post('/', (req, res) => {
  res.send('Add a pokemon');
});

// @route     GET api/pokemons/:id
// @desc      Show a specific pokemon
// @access    Private
router.get('/:id', (req, res) => {
  res.send('Show a specific pokemon');
});

// @route     PUT api/pokemons/{id}
// @desc      Update specific pokemon
// @access    Restricted
router.put('/:id', (req, res) => {
  res.send('Update specific pokemon');
});

// @route     DELETE api/pokemons/:id
// @desc      Delete specific pokemon
// @access    Restricted
router.delete('/:id', (req, res) => {
  res.send('Delete specific pokemon');
});

module.exports = router;
