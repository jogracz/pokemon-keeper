import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Pokemon = props => {
  const pokemonContext = useContext(PokemonContext);
  const { getPokemon, pokemon } = pokemonContext;

  // useEffect(() => {
  //   getPokemon(match.params.name);
  //   // eslint-disable-next-line
  // }, [pokemonContext, pokemon]);

  // useEffect(() => {
  //   if (pokemon) {
  //     props.history.push('/catchem');
  //   }
  // }, [props.history, pokemonContext, pokemon]);

  const { name, weight, species, sprites } = pokemon;

  return (
    <Fragment>
      <Link to='/catchem'>
        <h5>{'<< '}Go back</h5>
      </Link>
      <div className='container row'>
        <div className='col s6'>
          <h2>{name}</h2>
          <p>{weight}</p>
        </div>
        <div className='col s6'>
          <img src={sprites ? sprites.front_default : ''} className='pokeimg' />
        </div>
        <button className='col s12 btn bgcolor3'>CATCH IT!</button>
      </div>
    </Fragment>
  );
};

export default Pokemon;
