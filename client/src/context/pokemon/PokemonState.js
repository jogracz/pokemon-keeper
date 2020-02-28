import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import getRandomBetween from '../../utils/getRandomBetween';
import getRandomMoves from '../../utils/getRandomMoves';
import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  CLEAR_FOUND,
  POKEMON_ERROR,
  GET_MY_POKEMONS,
  CLEAR_MY_POKEMONS,
  ADD_POKEMON,
  DELETE_POKEMON,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const PokemonState = props => {
  const initialState = {
    myPokemons: null,
    allPokemons: [],
    matchingNames: [],
    foundPokemons: [],
    currentPokemon: {},
    error: null
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  // Ge All First Generation Pokemons
  const getAllPokemons = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

    dispatch({ type: GET_ALL_POKEMONS, payload: res.data.results });
  };

  // Get A Pokemon
  const getPokemon = async name => {
    //setLoading();

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = {
      id: null,
      name: '',
      weight: '',
      height: '',
      base_experience: '',
      types: [],
      sprites: {},
      level: null,
      moves: null
    };
    pokemon.id = res.data.id;
    pokemon.name = res.data.name;
    pokemon.weight = res.data.weight;
    pokemon.height = res.data.height;
    pokemon.base_experience = res.data.base_experience;
    pokemon.types = res.data.types;
    pokemon.sprites.front = res.data.sprites.front_default;
    pokemon.sprites.back = res.data.sprites.back_default;

    // Add level: random between 1 and 100
    const randomLevel = getRandomBetween(1, 100);
    pokemon.level = randomLevel;

    // Add moves: 2 random from moves array
    const moves = res.data.moves;
    pokemon.moves = getRandomMoves(moves, 2);

    dispatch({ type: GET_POKEMON, payload: pokemon });
  };

  // Set Current Pokemon
  const setCurrent = pokemon => {
    dispatch({ type: SET_CURRENT, payload: pokemon });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Search Pokemons
  const searchPokemons = text => {
    //Clear FoundPokemoms
    clearFound();

    const matchingNames = state.allPokemons.filter(pokemon =>
      pokemon.name.includes(text)
    );
    matchingNames.map(pokemon => getPokemon(pokemon.name));

    dispatch({ type: SEARCH_POKEMONS, payload: matchingNames });
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

  // Clear My Pokemons
  const clearMyPokemons = () => {
    dispatch({ type: CLEAR_MY_POKEMONS });
  };

  // Delete Pokemon
  const deletePokemon = async id => {
    try {
      await axios.delete(`/api/pokemons/${id}`);
      dispatch({ type: DELETE_POKEMON, payload: id });
    } catch (error) {
      dispatch({ type: POKEMON_ERROR, payload: error });
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        myPokemons: state.myPokemons,
        allPokemons: state.allPokemons,
        matchingNames: state.matchingNames,
        foundPokemons: state.foundPokemons,
        currentPokemon: state.currentPokemon,
        error: state.error,
        getAllPokemons,
        getPokemon,
        setCurrent,
        searchPokemons,
        clearFound,
        addPokemon,
        getMyPokemons,
        clearMyPokemons,
        deletePokemon,
        clearCurrent
      }}
    >
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
