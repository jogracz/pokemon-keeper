import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('./mypokeball');
    }
    if (error) {
      setAlert(error, 'danger');
      console.log(error);
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields');
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className='row container'>
      <h2>
        Account <span className='color2'>Login</span>
      </h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='email'>Email Adress</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          required
          className=''
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          required
        />
        <input
          type='submit'
          value='Login'
          className='btn bgcolor2 col s12 rainbowBg'
          style={{ marginTop: '20px' }}
        />
      </form>
    </div>
  );
};

export default Login;
