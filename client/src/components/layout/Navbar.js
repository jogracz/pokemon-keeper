import React, { Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import PokemonContext from '../../context/pokemon/pokemonContext';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
  const pokemonContext = useContext(PokemonContext);
  const { allPokemons, getAllPokemons } = pokemonContext;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  // useEffect(() => {
  //   loadUser();

  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    if (allPokemons.length < 1) {
      getAllPokemons();
    }
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    // clear My Pokemons
  };

  const userLinks = (
    <Fragment>
      {/* My panel */}
      <li>
        <Link to='/mypanel'>My Panel</Link>
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
        <Link to='/' className='brand-logo hide-on-med-and-down'>
          <i className={icon} /> {title}
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

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Pokemon Keeper',
  icon: 'fa fa-pokemon'
};

export default Navbar;
