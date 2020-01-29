import React from 'react';
import { Link } from 'react-router-dom';

const CaughtPokemon = ({ name }) => {
  return (
    <div className='row'>
      <h4 className='color3 cols12'>What a great day!</h4>
      <h2 className='col s12 center-align'>You caught {name}!</h2>

      <div className='col s12 section'>
        <Link to='/catchem'>
          <button className='btn bgcolor3 col s3 offset-s2'>Catch more</button>
        </Link>
        <Link to='/mypanel'>
          <button className='btn bgcolor2 col s3 offset-s2'>My Panel</button>
        </Link>
      </div>
    </div>
  );
};

export default CaughtPokemon;
