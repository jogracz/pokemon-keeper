import React, { useContext, Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PokemonItem from './PokemonItem';
import Spinner from '../layout/Spinner';

const Pokemons = () => {
  const pokemonContext = useContext(PokemonContext);

  const { myPokemons, allPokemons, foundPokemons } = pokemonContext;

  // let pokemons;
  // if (loggedIn) {
  //   pokemons = myPokemons;
  // } else {
  //   pokemons = foundPokemons;
  // }
  // if (loading) {
  //   return <Spinner />;
  // } else {
  return (
    <Fragment>
      <div className='row'>
        {foundPokemons.map(pokemon => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  );
  // }
};

export default Pokemons;
