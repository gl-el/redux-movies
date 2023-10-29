import { NavBar } from '@/components/layout/NavBar';
import { Main } from './components/layout/Main';
import { Movies } from './components/Movies';
import { WatchedMovies } from './components/WatchedMovies';
import { Box } from '@/components/layout/Box';

export function App() {
  // в целом в App никакой логики не должно быть

  // const { savedMovies } = useAppSelector((state) => state.moviesSaved);

  // не надо перед закрытием класть в лс, клади сразу как поменялся стейт
  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     localStorage.setItem('watched', JSON.stringify(savedMovies));
  //   });
  // }, [savedMovies]);
  return (
    <>
      <NavBar />
      <Main>
        <Box>
          <Movies />
        </Box>
        <Box>
          <WatchedMovies />
        </Box>
      </Main>
    </>
  );
}
