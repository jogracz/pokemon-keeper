import React, { useState, useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Search = () => {
  const pokemonContext = useContext(PokemonContext);
  const { searchPokemons } = pokemonContext;

  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text !== '') {
      searchPokemons(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div style={{ marginTop: '20px' }}>
      <form onSubmit={onSubmit} className='form row'>
        <input
          type='text'
          name='text'
          placeholder='Type a letter or few...'
          value={text}
          onChange={onChange}
          className=''
        />
        <input
          type='submit'
          value='Search'
          className='btn col s12 bgcolor3 rainbowBg'
        />
      </form>
    </div>
  );
};

export default Search;
