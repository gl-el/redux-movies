import { useAppSelector } from '@/store/hooks';
import { MovieDetailed } from '../MovieDetailed';
import { Box } from '../layout/Box';

export function WatchedMovies() {
  const { status, movie } = useAppSelector((state) => state.movieDetails);
  return <Box>{status === 'success' && movie && <MovieDetailed movie={movie} />}</Box>;
}
