import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

const PokemonItem = ({ pokemon }) => {
  return (
    <Fragment>
      <Link to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
        <div className='card col s4 container'>
          <h4>{pokemon.name}</h4>
          <img src={pokemon.sprites['front_default']} className='pokeimg' />
        </div>
      </Link>
    </Fragment>
  );
};

export default PokemonItem;
