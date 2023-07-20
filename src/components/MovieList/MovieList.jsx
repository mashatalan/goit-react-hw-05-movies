import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MovieListContainer,
  MovieItem,
  MovieImage,
  MovieTitle,
  CustomLink,
  Wrapper,
  WrapperContent,
  WrapperDescription,
} from './MovieList.styled';
import Loader from '../Loader';
import { useState } from 'react';
import BackToTop from '../BackToTop';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const [isLoading] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

  return (

    <>
      <MovieListContainer>
        {movies.map(movie => (
          <CustomLink state={{ from: location }} key={movie.id} to={`/movies/${movie.id}`}>
            <MovieItem>
              <Wrapper>
                <MovieImage img={movie.poster_path} alt={movie.title} />
                <WrapperDescription>
                  <WrapperContent>
                    <MovieTitle>{movie.original_title}</MovieTitle>
                  </WrapperContent>
                </WrapperDescription>
              </Wrapper>
            </MovieItem>
          </CustomLink>
        ))}
      </MovieListContainer>
      <BackToTop />
    </>
  );
};


MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieList;
