import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  SET_CURRENT,
  GET_MY_POKEMONS,
  CLEAR_MY_POKEMONS,
  CLEAR_FOUND,
  ADD_POKEMON,
  POKEMON_ERROR,
  DELETE_POKEMON,
  CLEAR_CURRENT
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POKEMONS:
      return {
        ...state,
        matchingNames: action.payload
      };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload
      };
    case GET_POKEMON:
      return {
        ...state,
        foundPokemons: [...state.foundPokemons, action.payload]
      };
    case SET_CURRENT:
      return {
        ...state,
        currentPokemon: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        currentPokemon: null
      };
    case GET_MY_POKEMONS:
      return {
        ...state,
        myPokemons: action.payload
      };
    case CLEAR_MY_POKEMONS:
      return {
        ...state,
        myPokemons: null
      };
    case DELETE_POKEMON:
      return {
        ...state,
        myPokemons: state.myPokemons.filter(
          pokemon => pokemon._id !== action.payload
        )
      };
    case CLEAR_FOUND:
      return {
        ...state,
        foundPokemons: []
      };
    case ADD_POKEMON:
      return {
        ...state,
        myPokemons: [...state.myPokemons, action.payload]
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
