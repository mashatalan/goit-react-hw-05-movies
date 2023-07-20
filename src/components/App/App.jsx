import { Route, Routes } from 'react-router-dom';
import { Container, Header, Li, Link, NavContainer, UL } from './App.styled';
import { lazy, Suspense } from 'react';
import Loader from '../Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const App = () => {
  return (
    <Container>
      <Header>
        <NavContainer>
          <UL>
            <Li>
              <Link to='/'>Home</Link>
            </Li>
            <Li><Link to='/movies'>Movies</Link>
            </Li>
          </UL>
        </NavContainer>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/movies/:movieId/*' element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};

export default App;
