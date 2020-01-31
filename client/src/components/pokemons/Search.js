import React, {
  Fragment,
  useState,
  useContext,
  useEffect,
  Component
} from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
//import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const pokemonContext = useContext(PokemonContext);
  const {
    allPokemons,
    foundPokemons,
    getAllPokemons,
    getPokemon
  } = pokemonContext;

  // useEffect(() => {
  //   if (allPokemons.length < 1) {
  //     pokemonContext.getAllPokemons();
  //   }
  //   //   // eslint-disable-next-line
  // }, []);
  //const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    // if (!allPokemons.length > 0) {
    //   getAllPokemons();
    // }
    //if (text === '') {
    //alertContext.setAlert('Please enter something', 'light');
    // } else {
    // allPokemons.map(pok => {
    //   if (pok.name === text) {
    //     getPokemon(pok.name);
    //   }
    // });
    pokemonContext.searchPokemons(text);
    setText('');
    //}
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form row'>
        <input
          type='text'
          name='text'
          placeholder='Search Pokemons...'
          value={text}
          onChange={onChange}
          className='color5'
        />
        <input type='submit' value='Search' className='btn col s12 bgcolor2' />
      </form>
      {/* {pokemonContext.allPokemons.length > 0 && (
        <div className='row'>
          <button
            className='btn col s12 bgcolor3'
            // onClick={githubContext.clearUsers}
          >
            Clear
          </button>
        </div> 
      )}*/}
    </div>
  );
};

export default Search;
