import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  GET_MY_POKEMONS,
  SET_LOADING
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
        allPokemons: action.payload,
        loading: false
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false
      };
    case GET_MY_POKEMONS:
      return {
        ...state,
        myPokemons: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
