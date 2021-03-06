import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PropTypes from 'prop-types';

const PokemonItem = ({ pokemon }) => {
  const pokemonContext = useContext(PokemonContext);

  const onClick = () => {
    pokemonContext.setCurrent(pokemon);
  };

  return (
    <Fragment>
      <Link to={`/pokemon`} key={pokemon.id}>
        <div className='card pokeCard rainbowBg' onClick={onClick}>
          <div className='card-content center-align'>
            <h4 className='card-title'>{pokemon.name}</h4>
            <img src={pokemon.sprites.front} className='' alt='Pokemon' />
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

PokemonItem.propTypes = {
  pokemon: PropTypes.object.isRequired
};
export default PokemonItem;
