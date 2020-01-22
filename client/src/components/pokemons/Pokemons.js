import React, { Fragments, useContext, Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Pokemons = () => {
  const pokemonContext = usecontext(PokemonContext);

  const { pokemons } = pokemonContext;
  return (
    <Fragment>
      {pokemons.map(pokemon => (
        <h3>{pokemon.name}</h3>
      ))}
    </Fragment>
  );
};

export default Pokemons;
