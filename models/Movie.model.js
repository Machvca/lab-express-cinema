const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  director: {
    type: String,
  },

  stars: {
    type: [String],
  },

  image: {
    type: String,
  },

  description: {
    type: String,
  },

  showtimes: {
    type: [String],
  },
});

const Movies = mongoose.model("Movies", movieSchema);
//Pokemon -> pokemons
module.exports = Movies;
