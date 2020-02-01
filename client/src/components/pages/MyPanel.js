import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import PokemonContext from '../../context/pokemon/pokemonContext';
import PokemonItem from '../pokemons/PokemonItem';

const MyPanel = () => {
  const authContext = useContext(AuthContext);
  const pokemonContext = useContext(PokemonContext);
  const { user } = authContext;
  const { myPokemons, getMyPokemons } = pokemonContext;

  useEffect(() => {
    getMyPokemons();
  }, []);

  return (
    <div className='row'>
      <h5>
        User {user && user.name}, you've got {myPokemons.length} pokemons.
      </h5>
      <h4 className='divider'></h4>

      <div className='col s6'>
        <h5>Your pokemons</h5>
        {/* <Pokemons pokemons={myPokemons} /> */}
        <div className='container'>
          {myPokemons &&
            myPokemons.map(pokemon => (
              <PokemonItem key={pokemon._id} pokemon={pokemon} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MyPanel;
