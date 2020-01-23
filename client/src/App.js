import React, { Component, Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Catchem from './components/pages/Catchem';

import PokemonContext from './context/pokemon/pokemonContext';

import PokemonState from './context/pokemon/PokemonState';
import './App.css';

const App = () => {
  return (
    <PokemonState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='valign-wrapper'>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/catchem' component={Catchem} />
              </Switch>
            </div>
          </div>
        </Fragment>
      </Router>
    </PokemonState>
  );
};

export default App;
