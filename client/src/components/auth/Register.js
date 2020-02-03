import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('./mypokeball');
    }
    if (error) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '' || password2 === '') {
      setAlert('Please enter all fields', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  return (
    <div className='row container'>
      <h2>
        Account <span className='color1'>Register</span>
      </h2>
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={onChange}
          required
        />

        <label htmlFor='email'>Email Adress</label>
        <input
          type='email'
          name='email'
          value={email}
          onChange={onChange}
          required
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={password}
          onChange={onChange}
          required
          minLength='6'
        />

        <label htmlFor='password2'>Confirm Password</label>
        <input
          type='password'
          name='password2'
          value={password2}
          onChange={onChange}
          required
          minLength='6'
        />

        <input
          type='submit'
          value='Register'
          className='btn bgcolor1 col s12 rainbowBg'
          style={{ marginTop: '20px' }}
        />
      </form>
    </div>
  );
};

export default Register;
