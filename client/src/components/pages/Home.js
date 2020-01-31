import React, { useContext, useEffect, Fragment } from 'react';
import Pokemons from '../pokemons/Pokemons';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Home = props => {
  const pokemonContext = useContext(PokemonContext);
  const authContext = useContext(AuthContext);
  const { allPokemons, getAllPokemons } = pokemonContext;
  const { user, loadUser, isAuthenticated } = authContext;

  useEffect(() => {
    loadUser();
    if (isAuthenticated) {
      props.history.push('./mypanel');
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  return (
    <Fragment>
      <div className='row valign-wrapper'>
        <div className='col s6 offset-s1'>
          <h5>This is a </h5>
          <h4>Pokemon Keeper App</h4>
          <h6>You can catch pokemons and keep them saved in your account</h6>
          <h5>How cool is that?</h5>
        </div>
        <div className='col s4 offset-s1'>
          <p className='col s10'>New here?</p>
          <Link to='/register'>
            <button className='btn bgcolor2 col s10'>Register</button>
          </Link>
          <p className='col s10'>Already registered?</p>
          <Link to='/login'>
            <button className='btn bgcolor3 col s10'>Login</button>
          </Link>
          <p className='col s10'>Need some inspiration?</p>
          <Link to='/catchem'>
            <button className='btn bgcolor1 col s10'>Browse Pokemons</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
