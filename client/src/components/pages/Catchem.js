import React, { Fragment } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import Search from '../pokemons/Search';
import PokemonItem from '../pokemons/PokemonItem';
import Spinner from '../layout/Spinner';
import { useContext } from 'react';

const Catchem = () => {
  const pokemonContext = useContext(PokemonContext);
  const { foundPokemons, matchingNames } = pokemonContext;

  return (
    <Fragment>
      <Search />
      {/* <Pokemons pokemons={foundPokemons} /> */}
      {/* {loading ? ( */}
      {foundPokemons.length === matchingNames.length ? (
        <div className='flexbox'>
          {foundPokemons.map(pokemon => (
            <div className='flexcontent' key={pokemon.name}>
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
