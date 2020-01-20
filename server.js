const express = require('express');
const connectDB = require('./config/db');
const app = express();

// GET
app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the PokemonKeeper API!' })
);

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/pokemons', require('./routes/pokemons'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
