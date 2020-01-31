import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  SET_POKEMON,
  GET_MY_POKEMONS,
  SET_LOADING,
  CLEAR_FOUND,
  ADD_POKEMON,
  POKEMON_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POKEMONS:
      return {
        ...state,
        foundPokemons: action.payload,
        loading: false
      };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload
        //loading: false
      };
    case GET_POKEMON:
      return {
        ...state,
        foundPokemons2: [...state.foundPokemons2, action.payload],
        loading: true
      };
    case SET_POKEMON:
      return {
        ...state,
        pokemon: action.payload
        //loading: false
      };
    case GET_MY_POKEMONS:
      return {
        ...state,
        myPokemons: action.payload
        //loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_FOUND:
      return {
        ...state,
        foundPokemons2: []
      };
    case ADD_POKEMON:
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload]
        //loading: false
      };
    case POKEMON_ERROR:
      return {
        ...state,
        myPokemons: action.payload
      };
    case POKEMON_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
