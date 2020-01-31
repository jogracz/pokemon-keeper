import React, { useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PokemonItem from '../pokemons/PokemonItem';

const MyPanel = () => {
  const authContext = useContext(AuthContext);
  const pokemonContext = useContext(PokemonContext);
  const { user } = authContext;
  const { myPokemons } = pokemonContext;

  return (
    <div className='row'>
      <h4 className='divider'>User {user && user.name}!</h4>
      <div className='col s6'>
        <div className='card'>
          <h5>Your stats:</h5>
          <p>You have {myPokemons.length} pokemons</p>
        </div>
      </div>
      <div className='col s6'>
        <h5>Your pokemons</h5>
        {/* <Pokemons pokemons={myPokemons} /> */}
        <div className='container'>
          {myPokemons.map(pokemon => (
            <PokemonItem key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPanel;
