import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';

const PokemonItem = ({ pokemon }) => {
  const pokemonContext = useContext(PokemonContext);

  const onClick = () => {
    pokemonContext.setPokemon(pokemon);
  };

  return (
    <Fragment>
      <Link to={`/pokemons/${pokemon.name}`} key={pokemon.id}>
        <div className='card col s4 container' onClick={onClick}>
          <h4>{pokemon.name}</h4>
          <img src={pokemon.sprites['front_default']} className='pokeimg' />
        </div>
      </Link>
    </Fragment>
  );
};

export default PokemonItem;
