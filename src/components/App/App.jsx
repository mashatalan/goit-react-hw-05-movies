import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import React, { lazy, Suspense } from 'react';
import Navigation from '../Navigation';
import Loader from '../Loader';


const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));
const App = () => {

  return (
    <Container>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='movies' element={<Movies />} />
              <Route path='movies/:movieId' element={<MovieDetails />}>
                <Route path='cast' element={<Cast />} />
                <Route path='reviews' element={<Reviews />} />
              </Route>
              <Route path='*' element={<Navigate to='/' />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};
export default App;
