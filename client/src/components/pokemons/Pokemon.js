import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Pokemon = ({ match }) => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemon, pokemon } = pokemonContext;

  useEffect(() => {
    getPokemon(match.params.name);
    // eslint-disable-next-line
  }, [pokemonContext, pokemon]);

  const { name, weight, species, sprites } = pokemon;

  return (
    <Fragment>
      <Link to='/catchem'>
        <h5>{'<< '}Go back</h5>
      </Link>
      <div className='container'>
        <h2>{name}</h2>
        <p>{weight}</p>
        <p>{species ? species['name'] : ''}</p>

        <img src={sprites ? sprites.front_default : ''} className='pokeimg' />
      </div>
    </Fragment>
  );
};

export default Pokemon;
