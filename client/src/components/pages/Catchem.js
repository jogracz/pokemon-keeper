import React, { Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
//import AlertContext from '../../context/alert/alertContext';
import Search from '../pokemons/Search';
import Pokemons from '../pokemons/Pokemons';
import { useContext, useEffect } from 'react';

const Catchem = () => {
  const pokemonContext = useContext(PokemonContext);
  const { allPokemons, getAllPokemons, foundPokemons } = pokemonContext;

  // useEffect(() => {
  //   if (allPokemons.length < 1) {
  //     getAllPokemons();
  //   } // eslint-disable-next-line
  // }, [allPokemons, foundPokemons, pokemonContext]);

  return (
    <Fragment>
      <Search />
      <Pokemons />
    </Fragment>
  );
};
export default Catchem;
