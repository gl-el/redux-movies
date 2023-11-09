import { NavBar } from '@/components/layout/NavBar';
import { Main } from './components/layout/Main';
import { Movies } from './components/Movies';
import { WatchedMovies } from './components/WatchedMovies';
import { ToggleBox } from './components/layout/ToggleBox';

export function App() {
  return (
    <>
      <NavBar />
      <Main>
        <ToggleBox>
          <Movies />
        </ToggleBox>
        <ToggleBox>
          <WatchedMovies />
        </ToggleBox>
      </Main>
    </>
  );
}
