import React, { useReducer } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  SET_POKEMON,
  SET_LOADING,
  CLEAR_FOUND,
  POKEMON_ERROR,
  GET_MY_POKEMONS,
  ADD_POKEMON,
  DELETE_POKEMON,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const PokemonState = props => {
  const initialState = {
    myPokemons: [],
    allPokemons: [],
    foundPokemons: [],
    foundPokemons2: [],
    pokemon: {},
    error: null,
    loading: false
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
    const pokemon = {};
    pokemon.id = res.data.id;
    pokemon.name = res.data.name;
    pokemon.types = res.data.types;
    pokemon.sprite = res.data.sprites['front_default'];

    dispatch({ type: GET_POKEMON, payload: pokemon });
  };

  // Set A Pokemon
  const setPokemon = pokemon => {
    //setLoading();

    dispatch({ type: SET_POKEMON, payload: pokemon });
  };

  // Search Pokemons
  const searchPokemons = text => {
    setLoading();

    //Clear FoundPokemoms
    clearFound();

    const matchingP = state.allPokemons.filter(pokemon =>
      pokemon.name.includes(text)
    );
    matchingP.map(pokemon => getPokemon(pokemon.name));

    // const matchingP = [];
    // let res;
    // state.allPokemons.forEach(async pokemon => {
    //   if (pokemon.name.includes(text)) {
    //     res = await axios.get(pokemon.url);
    //     matchingP.push(res.data);
    //   }
    //});
    dispatch({ type: SEARCH_POKEMONS, payload: matchingP });
  };

  // Clear FoundPokemons
  const clearFound = () => {
    dispatch({ type: CLEAR_FOUND });
  };

  // Add Pokemon
  const addPokemon = async pokemon => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/pokemons', pokemon, config);
      dispatch({ type: ADD_POKEMON, payload: res.data });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error });
    }
  };

  // Get My Pokemons
  const getMyPokemons = async () => {
    try {
      const res = await axios.get('/api/pokemons');
      dispatch({ type: GET_MY_POKEMONS, payload: res.data });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error });
    }
  };
  // Delete Pokemon

  // Set Current Pokemon

  // Clear Current Pokemon

  // Update Pokemon

  // Filter Pokemons

  // Clear Filter

  // Clear Pokemons
  //const clearUsers = () => dispatch({ type: CLEAR_POKEMONS });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PokemonContext.Provider
      value={{
        myPokemons: state.myPokemons,
        allPokemons: state.allPokemons,
        foundPokemons: state.foundPokemons,
        foundPokemons2: state.foundPokemons2,
        pokemon: state.pokemon,
        loading: state.loading,
        error: state.error,
        getAllPokemons,
        getPokemon,
        setPokemon,
        searchPokemons,
        clearFound,
        addPokemon,
        getMyPokemons
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
