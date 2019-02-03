const { addMovie, getMovies, getById } = require('./db');

// query를 해결해주는 것
const resolvers = {
  Query: {
    name: () => 'minung',
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie({ name, score })
  }
}

module.exports = resolvers;