import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';
import CaughtPokemon from './CaughtPokemon';

const Pokemon = props => {
  const pokemonContext = useContext(PokemonContext);
  const authContext = useContext(AuthContext);
  const { getPokemon, pokemon, addPokemon } = pokemonContext;
  const { isAuthenticated } = authContext;

  const [caught, setCaught] = useState(false);
  // useEffect(() => {
  //   getPokemon(match.params.name);
  //   // eslint-disable-next-line
  // }, [pokemonContext, pokemon]);
  useEffect(() => {
    if (pokemon === {}) {
      props.history.push('/catchem');
    }
    // eslint-disable-next-line
  }, [pokemon, props.history]);

  // useEffect(() => {
  //   if (pokemon) {
  //     props.history.push('/catchem');
  //   }
  // }, [props.history, pokemonContext, pokemon]);

  const { name, weight, species, sprite } = pokemon;

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
    addPokemon(pokemon);

    // Change state to display CaughtPokemon component
    setTimeout(() => {
      setCaught(true);
    }, 1400);

    // setTimeout(() => {
    //   document.getElementById('root').classList.add('rainbowBg');
    // }, 1400);

    //@todo Add pokemon to My Pokemons
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
          {isAuthenticated ? (
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
        </div>
      </Fragment>
    );
  } else {
    return <CaughtPokemon name={pokemon.name} />;
  }
};

export default Pokemon;
