import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../../services/API';
import MovieList from '../../components/MovieList';
import ErrorMessage from '../../components/ErrorMessage';
import SearchForm from '../../components/SearchForm';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get('query');

  const [movies, setMovies] = useState([]);
  const [, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    const fetchMoviesSearchData = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchMoviesSearch(searchTerm);
        setMovies(movies.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesSearchData();

  }, [searchTerm]);


  const handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.target.children.search.value;
    if (searchValue.trim().length > 2) {
      setSearchParams({
        query: searchValue,
      });
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSubmit} />
      {error !== null && <ErrorMessage error={error} />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
