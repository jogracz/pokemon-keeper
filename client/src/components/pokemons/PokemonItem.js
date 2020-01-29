import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';

const PokemonItem = ({ pokemon }) => {
  const pokemonContext = useContext(PokemonContext);

  const onClick = () => {
    pokemonContext.setPokemon(pokemon);
  };
  //@todo tu pokemon ma byc z contextu a nie propsu
  return (
    <Fragment>
      <Link to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
        <div className='col s4 container'>
          <div className='card' onClick={onClick}>
            <div className='card-content center-align'>
              <h4 className=''>{pokemon.name}</h4>
              {/* <img src={pokemon.sprites['front_default']} className='pokeimg' /> */}
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default PokemonItem;
