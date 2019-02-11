const API_URL = 'https://yts.am/api/v2/list_movies.json';
const fetch = require('node-fetch');
const getMovies = ({ limit, rating } = {}) => {
  const query = [];
  limit && query.push(`limit=${limit}`);
  rating && query.push(`minimum_rating=${rating}`);

  const request_url = `${API_URL}?${query.join('&')}`;
 
  return fetch(request_url).then(res => res.json()).then(json => json.data.movies);
}

module.exports = {
  getMovies
}