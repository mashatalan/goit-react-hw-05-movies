import React, { useEffect, useState } from 'react';
import { List, P } from './Reviews.styled';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/API';

const Reviews = () => {

  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const fetchReviewsData = async () => {
      try {
        setIsLoading(true);
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews.results);

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviewsData();

  }, [movieId, ]);

  return (
    <div>
      {reviews.length === 0 && (
        <P>
          We don't have any reviews for this movie
        </P>
      )}
      <List>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </List>
    </div>
  );
};

export default Reviews;
