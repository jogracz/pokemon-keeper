import React, { Fragment } from 'react';

const PokemonItem = ({ pokemon }) => {
  return (
    <Fragment>
      <div className='card col s4 container'>
        <h4>{pokemon.name}</h4>
        <img src={pokemon.sprites['front_default']} className='pokeimg' />
      </div>
    </Fragment>
  );
};

export default PokemonItem;
