import React, { Fragment, useState, useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
//import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const pokemonContext = useContext(PokemonContext);
  const { allPokemons, foundPokemons } = pokemonContext;

  // if (!allPokemons.length > 0) {
  pokemonContext.getAllPokemons();
  //}
  //const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    //if (text === '') {
    //alertContext.setAlert('Please enter something', 'light');
    // } else {
    pokemonContext.searchPokemons(text);
    setText('');
    //}
  };

  const onChange = e => setText(e.target.value);

  return (
    <Fragment>
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
          <input
            type='submit'
            value='Search'
            className='btn col s12 bgcolor2'
          />
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
    </Fragment>
  );
};

export default Search;
