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
router.post(
  '/',
  [
    auth
    // [
    //   check('name', 'Name is required')
    //     .not()
    //     .isEmpty(),
    //   check('types', 'Types are required').exists(),
    //   check('sprite', 'Sprite is required').exists()
    // ]
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, types, sprites, weight, height, base_experience } = req.body;

    try {
      pokemon = new Pokemon({
        name,
        types,
        sprites,
        weight,
        height,
        base_experience,
        user: req.user.id
      });

      await pokemon.save();
      res.json(pokemon);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     GET api/pokemons/:id
// @desc      Show a specific pokemon
// @access    Private
router.get('/:id', (req, res) => {
  res.send('Show a specific pokemon');
});

// @route     PUT api/pokemons/{id}
// @desc      Update specific pokemon
// @access    Restricted
router.put('/:id', auth, async (req, res) => {
  const { name, types, sprite } = req.body;

  //Build a pokemon model
  const pokeFields = {};
  if (name) pokeFields.name = name;
  if (types) pokeFields.types = types;
  if (sprite) pokeFields.sprite = sprite;

  try {
    let pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(400).json({ msg: 'Pokemon not found' });

    // Make sure user owns this pokemon
    if (pokemon.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    pokemon = await Pokemon.findByIdAndUpdate(
      req.params.id,
      { $set: pokeFields },
      { new: true }
    );
    res.json(pokemon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/pokemons/:id
// @desc      Delete specific pokemon
// @access    Restricted
router.delete('/:id', auth, async (req, res) => {
  try {
    let pokemon = await Pokemon.findById(req.params.id);
    // Make sure pokemon exists
    if (!pokemon) return res.status(400).json({ msg: 'Pokemon not found' });

    // Make sure user owns this pokemon
    if (pokemon.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Pokemon.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Pokemon Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
