import React, { Fragment, useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';
import CaughtPokemon from './CaughtPokemon';

const Pokemon = props => {
  const pokemonContext = useContext(PokemonContext);
  const authContext = useContext(AuthContext);

  const {
    currentPokemon,
    addPokemon,
    myPokemons,
    deletePokemon
  } = pokemonContext;

  const { isAuthenticated } = authContext;

  const {
    name,
    weight,
    height,
    base_experience,
    sprites,
    _id,
    types,
    level,
    moves
  } = currentPokemon;

  console.log(moves);

  const [caught, setCaught] = useState(false);
  const [prevPage, setPrevPage] = useState('/catchem');

  useEffect(() => {
    if (!currentPokemon.name) {
      props.history.push('/catchem');
    }
    if (myPokemons && myPokemons.includes(currentPokemon)) {
      setPrevPage('/mypokeball');
    }
    // eslint-disable-next-line
  }, []);

  const badges = {
    electric: 'new badge yellow black-text',
    fire: 'new badge red',
    water: 'new badge  cyan accent-2 black-text',
    poison: 'new badge purple',
    grass: 'new badge green',
    bug: 'new badge pink lighten-3',
    flying: 'new badge light-blue',
    ground: 'new badge brown lighten-2',
    ice: 'new badge blue lighten-5 black-text',
    fighting: 'new badge red darken-4',
    psychic: 'new badge  purple accent-1',
    rock: 'new badge grey darken-4',
    ghost: 'new badge light-grey',
    dragon: 'new badge dark-green',
    steel: 'new badge grey lighten-1',
    normal: 'new badge grey'
  };

  // Catch Pokemon
  const onClick = () => {
    // Add animation to pokemon image
    const pokeImg = document.querySelector('.pokeimg');
    pokeImg.classList.add('shake');

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

  // Delete Pokemon
  const onDelete = () => {
    const pokeImg = document.querySelector('.pokeimg');
    // Change picture to back
    pokeImg.setAttribute('src', sprites.back);

    // Delete pokemon from DB
    deletePokemon(_id);

    // Add animation
    setTimeout(() => {
      pokeImg.classList.add('byebye');
    }, 800);

    // Go back to My Pokeball
    setTimeout(() => {
      props.history.push('/mypokeball');
    }, 1700);
  };

  if (!caught) {
    return (
      <Fragment>
        <div className='row'>
          {/* Back to previous page links */}
          <div className='col s2 l2'>
            <Link to={prevPage}>
              <h3 className='color5' style={{ marginBottom: '0px' }}>
                <i className='fa fa-arrow-circle-left'></i>
              </h3>
            </Link>
          </div>

          <div
            id='toCatch'
            className='col s12 m10 l8 xl6 offset-m1 offset-xl1'
            style={{}}
          >
            {/* Pokemon's name on top */}
            <div className='col s12'>
              <h3 className='center-align'>{name}</h3>
            </div>
            {/* Properties and picture div */}
            <div className='col s12' style={{ marginBottom: '10px' }}>
              {/* Pokemon's properties on the left*/}
              <div className='col s10 m6 offset-s1'>
                {/* Types */}
                <h6>
                  {types && types.length > 1 ? 'Types' : 'Type'}
                  {types &&
                    types.map(type => (
                      <span
                        key={type.type.name}
                        className={badges[type.type.name]}
                        data-badge-caption=''
                      >
                        {type.type.name}
                      </span>
                    ))}
                </h6>
                <h6>Base Experience: {base_experience}</h6>
                <h6>Weight: {weight}</h6>
                <h6>Height: {height}</h6>
                {level && <h6>Level: {level}</h6>}
                {moves && (
                  <h6>
                    Moves:
                    {moves.map((move, i) => (
                      <small key={i}> {move['move']['name']} </small>
                    ))}
                  </h6>
                )}
              </div>

              {/* Pokemon img on the right */}
              <div
                className='col s12 m6 center-align'
                style={{ height: '150px' }}
              >
                <img
                  src={sprites ? sprites.front : ''}
                  className='pokeimg'
                  alt='Pokemon'
                />
              </div>
            </div>

            {/* Buttons on the bottom*/}

            {isAuthenticated &&
            myPokemons &&
            myPokemons.includes(currentPokemon) ? (
              // if logged in and it's your pokemon: set it free
              <button className='btn bgcolor4 col s12' onClick={onDelete}>
                Set it free...
              </button>
            ) : isAuthenticated ? (
              // if logged in but it's not your pokemon: catch it
              <button
                id='catchBtn'
                className='col s12 btn bgcolor3 rainbowBg'
                onClick={onClick}
              >
                CATCH IT!
              </button>
            ) : (
              // if not logged in: log in
              <Link to='/login'>
                <button className='col s12 btn bgcolor2 rainbowBg'>
                  Login to catch it
                </button>
              </Link>
            )}
          </div>
        </div>
      </Fragment>
    );
  } else {
    return <CaughtPokemon name={currentPokemon.name} />;
  }
};

export default Pokemon;
