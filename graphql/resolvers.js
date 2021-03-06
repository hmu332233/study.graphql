// const { addMovie, getMovies, getById, deleteMovie } = require('./db');
const { getMovies } = require('./api');

// query를 해결해주는 것
// const resolvers = {
//   Query: {
//     name: () => 'minung',
//     movies: () => getMovies(),
//     movie: (_, { id }) => getById(id)
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMovie({ name, score }),
//     deleteMovie: (_, { id }) => deleteMovie(id)
//   }
// }
const resolvers = {
  Query: {
    
    movies: (_, { rating, limit }) => getMovies({ rating, limit }),
    
  },
  // Mutation: {
  //   addMovie: (_, { name, score }) => addMovie({ name, score }),
  //   deleteMovie: (_, { id }) => deleteMovie(id)
  // }
}

module.exports = resolvers;