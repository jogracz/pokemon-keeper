import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PokemonItem from '../pokemons/PokemonItem';
import Spinner from '../layout/Spinner';
import emptyPokeball from './Poke_Ball_Interior.png';
import { CLEAR_MY_POKEMONS } from '../../context/types';

const MyPokeball = () => {
  const authContext = useContext(AuthContext);
  const pokemonContext = useContext(PokemonContext);
  const { user, deleteUser } = authContext;
  const { myPokemons, getMyPokemons, clearMyPokemons } = pokemonContext;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyPokemons();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (myPokemons) {
      setLoading(false);
    }
  }, [myPokemons]);

  const onDelete = e => {
    e.preventDefault();
    if (window.confirm('Confirm deleting your account')) {
      deleteUser(user._id);
      setTimeout(() => {
        clearMyPokemons();
      }, 1000);
    }
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className='row'>
          <h3 className='color1 col s12'>My Pokeball</h3>
          <h5 className='col s4'>
            Hello <span className='color1'>{user && user.name}</span>
          </h5>
          <h5 className='col s8'>
            You've got {myPokemons.length}
            {myPokemons.length === 1 ? ' pokemon:' : ' pokemons:'}
          </h5>

          <div
            className='divider col s12'
            style={{ marginBottom: '15px' }}
          ></div>

          <div className='flexbox col s12'>
            {myPokemons &&
              myPokemons.map(pokemon => (
                <div className='flexcontent' key={pokemon._id}>
                  <PokemonItem pokemon={pokemon} />
                </div>
              ))}

            {myPokemons.length === 0 && (
              <div className='flexcontent'>
                <img
                  src={emptyPokeball}
                  className='emptyPokeball'
                  alt='Hand holding an open, empty pokeball'
                />
              </div>
            )}
            <div className='flexcontent'>
              <div className='card rainbowBg-persist'>
                <Link to='/catchem' className=''>
                  <div className='card-content center-align'>
                    <h4 style={{ color: 'white' }}>
                      {myPokemons.length > 0 ? 'Catch more' : 'Catch some!'}
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div
            className='divider col s12'
            style={{ marginBottom: '30px' }}
          ></div>
          <div className='center-align col s12'>
            <a
              href='#'
              className='color4 right'
              style={{ fontSize: '14px' }}
              onClick={onDelete}
            >
              <i className='fa fa-remove'></i> Delete Account
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
};

export default MyPokeball;
