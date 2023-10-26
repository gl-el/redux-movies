import { Box } from '@/components/layout/Box';
import { useAppSelector } from '@/store/hooks';
import { MoviePreview } from '../MoviePreview';
import { Loader } from '../Loader';
import { ErrorMessenger } from '../ErrorMessenger';

export function Movies() {
  const { movies, status, message } = useAppSelector((state) => state.movies);
  return (
    <Box>
      {status === 'pending' && <Loader />}
      {status === 'error' && <ErrorMessenger message={message} />}
      {status === 'success' && (
        <ul>
          {movies.map((data) => (
            <MoviePreview key={data.imdbID} movie={data} />
          ))}
        </ul>
      )}
    </Box>
  );
}
