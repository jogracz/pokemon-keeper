import React, { useContext, Fragment, useEffect } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PokemonItem from './PokemonItem';
import Spinner from '../layout/Spinner';
import Search from '../pokemons/Search';

const Pokemons = () => {
  const pokemonContext = useContext(PokemonContext);

  const {
    myPokemons,
    allPokemons,
    foundPokemons,
    foundPokemons2,
    getPokemon
  } = pokemonContext;
  console.log(foundPokemons);
  // let pokemons;
  // if (loggedIn) {
  //   pokemons = myPokemons;
  // } else {
  //   pokemons = foundPokemons;
  // }
  // if (loading) {
  //   return <Spinner />;
  // } else {
  // useEffect(() => {
  //   foundPokemons.forEach(pokemon => getPokemon(pokemon.name));
  // });

  return (
    <Fragment>
      {/* <Search /> */}
      <div className='row'>
        {foundPokemons.map(pokemon => (
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Fragment>
  );
};

export default Pokemons;
