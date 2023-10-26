import { NavBar } from '@/components/layout/NavBar';
import { Main } from './components/layout/Main';
import { Movies } from './components/Movies';
import { WatchedMovies } from './components/WatchedMovies';
import { useAppSelector } from './store/hooks';
import { useEffect } from 'react';

export function App() {
  const { savedMovies } = useAppSelector((state) => state.moviesSaved);
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('watched', JSON.stringify(savedMovies));
    });
  }, [savedMovies]);
  return (
    <>
      <NavBar />
      <Main>
        <Movies />
        <WatchedMovies />
      </Main>
    </>
  );
}
