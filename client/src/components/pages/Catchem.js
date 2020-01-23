import React, { Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
//import AlertContext from '../../context/alert/alertContext';
import Search from '../pokemons/Search';
import Pokemons from '../pokemons/Pokemons';

const Catchem = () => (
  <Fragment>
    <Search />
    <Pokemons />
  </Fragment>
);
export default Catchem;
