import React, { Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
//import AlertContext from '../../context/alert/alertContext';
import Search from '../pokemons/Search';
import Pokemons from '../pokemons/Pokemons';
import PokemonItem from '../pokemons/PokemonItem';
import Spinner from '../layout/Spinner';
import { useContext, useEffect } from 'react';

const Catchem = () => {
  const pokemonContext = useContext(PokemonContext);
  const { foundPokemons2, foundPokemons, loading } = pokemonContext;

  // useEffect(() => {
  //   if (allPokemons.length < 1) {
  //     getAllPokemons();
  //   } // eslint-disable-next-line
  // }, [allPokemons, foundPokemons, pokemonContext]);

  return (
    <Fragment>
      <Search />
      {/* <Pokemons pokemons={foundPokemons} /> */}
      {/* {loading ? ( */}
      {foundPokemons.length === foundPokemons2.length ? (
        <div className='row'>
          {foundPokemons2.map(pokemon => (
            <div className='col s4' key={pokemon.name}>
              <PokemonItem pokemon={pokemon} />
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
      {/* ) : (
        <Spinner />
      )} */}
    </Fragment>
  );
};
export default Catchem;
