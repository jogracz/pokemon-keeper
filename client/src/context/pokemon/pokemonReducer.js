import {
  SEARCH_POKEMONS,
  GET_ALL_POKEMONS,
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
    case GET_MY_POKEMONS:
      return {
        ...state,
        myPokemons: action.payload,
        loading: false
      };
    // case GET_USER:
    //   return {
    //     ...state,
    //     user: action.payload,
    //     loading: false
    //   };
    // case GET_REPOS:
    //   return {
    //     ...state,
    //     repos: action.payload,
    //     loading: false
    //   };
    // case CLEAR_USERS:
    //   return {
    //     ...state,
    //     users: [],
    //     loading: false
    //   };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
