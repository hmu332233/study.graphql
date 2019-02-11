let movies = [
  {
    id: 1,
    name: 'minung',
    score: 0.1
  },
  {
    id: 2,
    name: 'minung2',
    score: 0.5
  },
  {
    id: 3,
    name: 'minung3',
    score: 0.8
  },
  {
    id: 4,
    name: 'minung4',
    score: 0.9
  }
];

const getMovies = () => movies;
const getById = id => {
  const filteredMovie = movies.filter(movie => id === movie.id);
  return filteredMovie[0];
}

const addMovie = ({ name, score }) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}

const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);

  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

module.exports = {
  getMovies,
  getById,
  addMovie,
  deleteMovie
}