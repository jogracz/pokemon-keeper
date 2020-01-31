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
  sprite: {
    type: String
  }
});

module.exports = mongoose.model('pokemon', PokemonSchema);
