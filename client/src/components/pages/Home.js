import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/auth/authContext';
import { Link } from 'react-router-dom';

const Home = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('./myPokeball');
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <Fragment>
      <div className='row ' style={{ marginTop: '20px' }}>
        <div className='col s12 m6 l6 xl6' style={{ marginBottom: '20px' }}>
          <h5>This is a </h5>
          <h4>Pokemon Keeper App</h4>
          <h6>You can catch pokemons and keep them saved in your account</h6>
          <h5>How cool is that?</h5>
        </div>
        <div className='col s12 m5 l5 xl4' style={{ marginLeft: '30px' }}>
          <p className='col s10'>New here?</p>
          <Link to='/register'>
            <button className='btn bgcolor1 col s10 rainbowBg'>Register</button>
          </Link>
          <p className='col s10'>Already registered?</p>
          <Link to='/login'>
            <button className='btn bgcolor2 col s10 rainbowBg'>Login</button>
          </Link>
          <p className='col s10'>Need inspiration?</p>
          <Link to='/catchem'>
            <button className='btn bgcolor3 col s10 rainbowBg'>
              Browse Pokemons
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
