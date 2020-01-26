import React, { useReducer } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  SET_LOADING,
  GET_MY_POKEMONS,
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
    myPokemons: [
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
    ],
    allPokemons: [],
    foundPokemons: [],
    pokemon: {},
    loading: true
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Ge All 152 Pokemons
  const getAllPokemons = async () => {
    //setLoading();

    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

    dispatch({ type: GET_ALL_POKEMONS, payload: res.data.results });
  };

  // Get A Pokemon
  const getPokemon = async name => {
    //setLoading();

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch({ type: GET_POKEMON, payload: res.data });
  };

  // Search Pokemons
  const searchPokemons = async text => {
    //setLoading();

    const matchingP = [];
    let res;
    state.allPokemons.forEach(async pokemon => {
      if (pokemon.name.includes(text)) {
        res = await axios.get(pokemon.url);
        matchingP.push(res.data);
      }
    });
    dispatch({ type: SEARCH_POKEMONS, payload: matchingP });
  };

  // Add Pokemon

  // Delete Pokemon

  // Set Current Pokemon

  // Clear Current Pokemon

  // Update Pokemon

  // Filter Pokemons

  // Clear Filter

  // Clear Pokemons
  //const clearUsers = () => dispatch({ type: CLEAR_POKEMONS });

  // Set Loading
  //const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PokemonContext.Provider
      value={{
        myPokemons: state.myPokemons,
        allPokemons: state.allPokemons,
        foundPokemons: state.foundPokemons,
        pokemon: state.pokemon,
        loading: state.loading,
        loggedIn: state.loggedIn,
        getAllPokemons,
        getPokemon,
        searchPokemons
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
