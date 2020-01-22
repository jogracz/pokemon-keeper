import React, { useReducer } from 'react';
import uuid from 'uuid';
import PokemonContext from './pokemonContext';
import pokemonReducer from './pokemonReducer';
import {
  ADD_POKEMON,
  DELETE_POKEMON,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_POKEMON,
  FILTER_POKEMONS,
  CLEAR_FILTER
} from '../types';

const PokemonState = props => {
  const initialState = {
    pokemons: [
      {
        id: 1,
        name: 'Vulpix',
        type: 'personel'
      },

      {
        id: 2,
        name: 'Bulbazaur',
        type: 'professional'
      },
      {
        id: 3,
        name: 'Charmander',
        type: 'personal'
      }
    ]
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);

  // Add Pokemon

  // Delete Pokemon

  // Set Current Pokemon

  // Clear Current Pokemon

  // Update Pokemon

  // Filter Pokemons

  // Clear Filter

  return (
    <PokemonContext.Provider
      value={{
        pokemons: state.pokemons
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
