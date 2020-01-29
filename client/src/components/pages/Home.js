import React, { useContext, useEffect } from 'react';
import Pokemons from '../pokemons/Pokemons';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const pokemonContext = useContext(PokemonContext);
  const authContext = useContext(AuthContext);
  const { allPokemons, getAllPokemons } = pokemonContext;
  const { user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // if (allPokemons.length < 1) {
    //   getAllPokemons();
    // }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='row valign-wrapper'>
      <div className='col s6'>
        <h5>This is a </h5>
        <h4>Pokemon Keeper App</h4>
        <h6>You can catch pokemons and keep them saved in your account</h6>
        <h5>How cool is that?</h5>
      </div>
      <div className='col s6'>
        <div className='container'>
          <p>New here?</p>
          <Link to='/register'>
            <button className='btn bgcolor2'>Register</button>
          </Link>
          <p>Already registered?</p>
          <Link to='/login'>
            <button className='btn bgcolor1'>Login</button>
          </Link>
          <p>Need some inspiration?</p>
          <Link to='/catchem'>
            <button className='btn bgcolor3'>Browse Pokemons</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
