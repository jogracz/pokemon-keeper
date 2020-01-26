import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Catchem from './components/pages/Catchem';
import Pokemon from './components/pokemons/Pokemon';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import PokemonState from './context/pokemon/PokemonState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <PokemonState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='valign-wrapper'>
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/catchem' component={Catchem} />
                    <Route exact path='/pokemons/:name' component={Pokemon} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </div>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </PokemonState>
    </AuthState>
  );
};

export default App;
