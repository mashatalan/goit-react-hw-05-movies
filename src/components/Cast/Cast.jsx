import React, { useEffect, useState } from 'react';
import { fetchMovieCast } from '../../services/API';
import { useParams } from 'react-router-dom';
import { List, ActorItem } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
const GOOGLE_SEARCH = 'https://www.google.com/search?q='; const defaultImgCast = 'https://www.tgv.com.my/assets/images/404/movie-poster.jpg';
const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieCastData = async () => {
      try {
        setIsLoading(true);
        const movieCast = await fetchMovieCast(movieId);
        setCast(movieCast.cast);
        console.log('mx', cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieCastData();

  }, [cast, movieId]);

  return (
    <>
      <List>
        {cast.map(cast => (
          <ActorItem key={cast.id}>
            <a
              href={GOOGLE_SEARCH + cast.original_name}
              rel='noreferrer noopener'
              target='_blank'
            >
              <img
                width={250}
                src={
                  cast.profile_path
                    ? BASE_IMG_URL + cast.profile_path
                    : defaultImgCast
                }
                alt={cast.original_name}
              />
              <p>{cast.original_name}</p>
            </a>
          </ActorItem>
        ))}
      </List>
    </>
  );
};

export default Cast;
