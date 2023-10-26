import { NavBar } from '@/components/layout/NavBar';
import { Main } from './components/layout/Main';
import { Movies } from './components/Movies';
import { WatchedMovies } from './components/WatchedMovies';

export function App() {
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
