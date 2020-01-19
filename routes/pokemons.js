const express = require('express');
const router = express.Router();

// @route     GET api/pokemons
// @desc      Show all pokemons
// @access    Private
router.get('/', (req, res) => {
  res.send('Show all pokemons');
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
