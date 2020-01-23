import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  return (
    <Fragment>
      <nav>
        <div className='nav-wrapper bgcolor1'>
          <div className='brand-logo'>
            <Link to='/'>
              <i className={icon} /> {title}
            </Link>
          </div>
          <ul className='right'>
            <li>
              <Link to='/catchem'>Catch'em</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/About'>About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
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
