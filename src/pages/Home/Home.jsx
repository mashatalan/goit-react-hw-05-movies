import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../../services/API';
import MovieList from '../../components/MovieList';
import ErrorMessage from '../../components/ErrorMessage';

const Home = () => {
  const [movies, setMovies] = useState(() => JSON.parse(localStorage.getItem('movies')) ?? []);
  const [, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMovies();
        setMovies(movies.results);
        localStorage.setItem('movies', JSON.stringify(movies.results));

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesData();
  }, []);


  return (
    <div>
      <h1>Trending today</h1>
      {error !== null && <ErrorMessage error={error} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
