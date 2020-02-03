import React, { useContext, useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PokemonItem from '../pokemons/PokemonItem';
import Spinner from '../layout/Spinner';
import emptyPokeball from './Poke_Ball_Interior.png';

const MyPokeball = () => {
  const authContext = useContext(AuthContext);
  const pokemonContext = useContext(PokemonContext);
  const { user } = authContext;
  const { myPokemons, getMyPokemons } = pokemonContext;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyPokemons();
  }, []);

  useEffect(() => {
    if (myPokemons) {
      setLoading(false);
    }
  }, [myPokemons]);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <div className='row'>
          <h2 className='color1'>My Pokeball</h2>
          <h5 className='col s4'>
            Hello <span className='color1'>{user && user.name}</span>
          </h5>
          <h5 className='col s6'>
            You've got {myPokemons.length}
            {myPokemons.length === 1 ? ' pokemon:' : ' pokemons:'}
          </h5>
          <div
            className='divider col s12'
            style={{ marginBottom: '30px' }}
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
                <img src={emptyPokeball} className='emptyPokeball ' />
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
        </div>
      </Fragment>
    );
  }
};

export default MyPokeball;
