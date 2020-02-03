const mongoose = require('mongoose');

const PokemonSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  types: {
    type: Array,
    required: true
  },
  sprites: {
    type: Object
  },
  weight: {
    type: String
  },
  height: {
    type: String
  },
  base_experience: {
    type: String
  }
});

module.exports = mongoose.model('pokemon', PokemonSchema);
