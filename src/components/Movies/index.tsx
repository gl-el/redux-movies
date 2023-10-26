import { Box } from '@/components/layout/Box';
import { useAppSelector } from '@/store/hooks';
import { MoviePreview } from '../MoviePreview';

export function Movies() {
  const { movies, status, message } = useAppSelector((state) => state.movies);
  return (
    <Box>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'error' && <p>{message}</p>}
      <ul>
        {movies.map((data) => (
          <MoviePreview key={data.imdbID} movie={data} />
        ))}
      </ul>
    </Box>
  );
}
