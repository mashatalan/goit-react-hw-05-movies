import axios from 'axios';

const API_KEY = '97fe01addf81f73693338979426ece1e';
const baseURL = 'https://api.themoviedb.org/3/';

export const fetchMovies = async (page = 1, pageSize = 12) => {
  const { data } = await axios.get(`${baseURL}trending/movie/day?language=en-US&api_key=${API_KEY}&page=${page}`);
  return data;
};



export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(`${baseURL}/movie/${id}?language=en-US&api_key=${API_KEY}`);
  return data;
};

export const fetchMoviesSearch = async query => {
  const { data } = await axios.get(`${baseURL}/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}&page=1`);
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(`${baseURL}/movie/${id}/credits?language=en-US&api_key=${API_KEY}`);
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`${baseURL}/movie/${id}/reviews?language=en-US&api_key=${API_KEY}`);
  return data;
};

