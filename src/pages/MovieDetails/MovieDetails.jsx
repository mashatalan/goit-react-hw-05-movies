import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/API';
import {
  BackButton, H, ImgWrapper, Information, Li, MovieWrapper, Overview, P,
} from './MovieDetails.styled';
import Loader from '../../components/Loader';
import ErrorMessage from '../../components/ErrorMessage';
import ImgCart from '../../components/ImgCart';


const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetailsData = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetailsData();

  }, [movieId]);

  if (error !== null) {
    return (
      <ErrorMessage error={error} />
    );
  }

  if (movieDetails === null || isLoading) {
    return <Loader />;
  }

  const { title, vote_average, overview, backdrop_path, genres } = movieDetails;

  return (
    <div>
      <BackButton to={backLinkHref.current}>&#10094; Go back</BackButton>
      <MovieWrapper>
      <ImgWrapper>
        <ImgCart img={backdrop_path} alt={{title}}/>
      </ImgWrapper>
      <div>
        <h2>{title}</h2>
        <P>User Score: {Math.round(vote_average * 10)}%</P>
        <h3>Overview</h3>
        <Overview>{overview}</Overview>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => (
            <Li key={genre.id}>&#10003; {genre.name}</Li>
          ))}
        </ul>
      </div>
      </MovieWrapper>
      <div>
        <H>Additional information</H>
        <ul>
          <Information><Link to='cast'>&#10686; Cast</Link></Information>
          <Information><Link to='reviews'>&#10686; Reviews</Link></Information>

        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetails;
