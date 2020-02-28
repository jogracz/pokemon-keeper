const connectDB = require('../config/db');
const Pokemon = require('../models/Pokemons');
const fetch = require('node-fetch');
const getRandomBetween = require('../client/src/utils/getRandomBetween');
const getRandomMoves = require('../client/src/utils/getRandomMoves');

connectDB();

const updatePokeLevelAndMoves = async () => {
  try {
    //get all pokemons from db
    const allPokemons = await Pokemon.find({});
    console.log(allPokemons.length);
    // filter pokemons to those without level or moves
    const pokemonsToUpdate = allPokemons.filter(
      pokemon => !pokemon.level || !pokemon.moves || pokemon.moves.length === 0
    );

    // For each pokemon...
    pokemonsToUpdate.forEach(async pokemon => {
      // Check if it has level an moves, if not add
      if (!pokemon.level) {
        pokemon.level = getRandomBetween(1, 100);
      }
      if (!pokemon.moves || pokemon.moves.length === 0) {
        // fetch this pokemon from pokeApi
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        // get it's moves
        const moves = data.moves;
        // get random 2 moves (or 1 if there's only 1)
        pokemon.moves = getRandomMoves(moves, 2);
      }

      //update in DB
      await Pokemon.findByIdAndUpdate(
        pokemon.id,
        { $set: pokemon },
        { new: true }
      );
    });
  } catch (err) {
    console.error(err.message);
  }
};

updatePokeLevelAndMoves().then(() => console.log('Done'));
