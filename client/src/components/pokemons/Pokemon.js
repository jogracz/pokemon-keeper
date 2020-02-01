import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';
import CaughtPokemon from './CaughtPokemon';
import { DELETE_POKEMON } from '../../context/types';

const Pokemon = props => {
  const pokemonContext = useContext(PokemonContext);
  const authContext = useContext(AuthContext);
  const {
    currentPokemon,
    addPokemon,
    myPokemons,
    deletePokemon,
    clearCurrent,
    getMyPokemons
  } = pokemonContext;
  const { isAuthenticated } = authContext;

  const [caught, setCaught] = useState(false);

  useEffect(() => {
    if (currentPokemon === {}) {
      props.history.push('/catchem');
    }
    // eslint-disable-next-line
  }, []);

  const { name, weight, species, sprite, _id } = currentPokemon;

  const onClick = () => {
    // Add animation to pokemon image
    const pokeImg = document.querySelector('.pokeimg');
    pokeImg.classList.add('shake');
    // setTimeout(() => {
    //   pokeImg.classList.add('disappear');
    // }, 1400);

    // Change button text to 'catching'
    const catchBtn = document.getElementById('catchBtn');
    catchBtn.innerHTML = 'Catching...';

    // Add to db
    addPokemon(currentPokemon);

    // Change state to display CaughtPokemon component
    setTimeout(() => {
      setCaught(true);
    }, 1400);
  };

  const onDelete = () => {
    deletePokemon(_id);
    props.history.push('/myPanel');
  };

  if (!caught) {
    return (
      <Fragment>
        <Link to='/catchem'>
          <span>{'<< '}Go back</span>
        </Link>
        <div id='toCatch' className='container row'>
          <div className='col s6'>
            <h2>{name}</h2>
            <p>{weight}</p>
          </div>
          <div className='col s6 center-align'>
            <img src={sprite ? sprite : ''} className='pokeimg' />
          </div>
          {isAuthenticated && myPokemons.includes(currentPokemon) ? (
            <button className='btn bgcolor4 align-center' onClick={onDelete}>
              Delete
            </button>
          ) : isAuthenticated ? (
            <button
              id='catchBtn'
              className='col s12 btn bgcolor3 rainbowBg'
              onClick={onClick}
            >
              CATCH IT!
            </button>
          ) : (
            <h4 className='center-align'>
              <Link to='/login'>Login </Link> to catch it
            </h4>
          )}
          {myPokemons.includes(currentPokemon) && <h3>My pokemon</h3>}
        </div>
      </Fragment>
    );
  } else {
    return <CaughtPokemon name={currentPokemon.name} />;
  }
};

export default Pokemon;
