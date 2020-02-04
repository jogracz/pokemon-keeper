import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const CaughtPokemon = ({ name }) => {
  return (
    <Fragment>
      <div className='row'>
        <h4 className='color3 col s12 center-align'>What a great day!</h4>
        <h2 className='col s12 center-align'>You caught {name}!</h2>

        <div className='col s12 section' style={{ marginTop: '50px' }}>
          <Link to='/catchem'>
            <button
              className='btn bgcolor3 col s12 m4 l3 offset-m1 offset-l2'
              style={{ marginBottom: '30px' }}
            >
              Catch more
            </button>
          </Link>
          <Link to='/mypokeball'>
            <button className='btn bgcolor2 col s12 m4 l3 offset-m1 offset-l2'>
              My Pokeball
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default CaughtPokemon;
