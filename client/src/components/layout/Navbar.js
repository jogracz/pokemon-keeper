import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {
  const pokemonContext = useContext(PokemonContext);
  const { allPokemons, getAllPokemons, clearMyPokemons } = pokemonContext;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, loadUser } = authContext;

  useEffect(() => {
    if (allPokemons.length < 1) {
      loadUser();
      getAllPokemons();
    }
    // eslint-disable-next-line
  }, []);

  const onLogout = e => {
    e.preventDefault();
    logout();
    clearMyPokemons();
  };

  const userLinks = (
    <Fragment>
      <li>
        <Link to='/myPokeball'>My Pokeball</Link>
      </li>
      <li>
        <a href='#' onClick={onLogout}>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/Register'>Register</Link>
      </li>
      <li>
        <Link to='/Login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className='nav-wrapper bgcolor1'>
        <Link to='/' className='brand-logo hide-on-small-only left'>
          Pokemon Keeper
        </Link>
        <ul className='right'>
          <li>
            <Link to='/catchem'>Catch'em</Link>
          </li>

          {isAuthenticated ? userLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
