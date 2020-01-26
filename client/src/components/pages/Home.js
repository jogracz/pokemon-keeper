import React, { useContext } from 'react';
import Pokemons from '../pokemons/Pokemons';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Home = () => {
  const pokemonContext = useContext(PokemonContext);
  const { loggedIn } = pokemonContext;

  if (loggedIn) {
    return (
      <div>
        <h1>Hi Name!</h1>
        <h2>Here are your pokemons!</h2>
        <Pokemons />
      </div>
    );
  }
  return (
    <div>
      <h1>Home</h1>
      <Pokemons />
    </div>
  );
};

export default Home;
