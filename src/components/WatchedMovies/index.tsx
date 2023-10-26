import { useAppSelector } from '@/store/hooks';
import { MovieDetailed } from '../MovieDetailed';
import { Box } from '../layout/Box';
import { Summary } from '../Summary';
import { WatchedMoviePreview } from '../WatchedMoviePreview';
import { ErrorMessenger } from '../ErrorMessenger';
import { Loader } from '../Loader';

export function WatchedMovies() {
  const { status, movie, message } = useAppSelector((state) => state.movieDetails);
  const { savedMovies } = useAppSelector((state) => state.moviesSaved);
  return (
    <Box>
      {status === 'success' && movie ? (
        <MovieDetailed movie={movie} />
      ) : (
        <>
          <Summary />
          {status === 'pending' && <Loader />}
          {status === 'error' && <ErrorMessenger message={message} />}
          {status === 'idle' && (
            <ul>
              {savedMovies.map((movie, index) => (
                <WatchedMoviePreview movie={movie} key={index} />
              ))}
            </ul>
          )}
        </>
      )}
    </Box>
  );
}
