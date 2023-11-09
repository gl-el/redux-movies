import { useAppSelector } from '@/store/hooks';
import { MovieDetailed } from '../MovieDetailed';
import { Summary } from '../Summary';
import { WatchedMoviePreview } from '../WatchedMoviePreview';
import { ErrorMessage } from '../UI/ErrorMessage';
import { Loader } from '../UI/Loader';

export function WatchedMovies() {
  const { status, movie, message } = useAppSelector((state) => state.movieDetails);
  const { savedMovies } = useAppSelector((state) => state.moviesSaved);

  switch (status) {
    case 'pending':
      return (
        <>
          <Summary />
          <Loader />;
        </>
      );
    case 'error':
      return (
        <>
          <Summary />
          <ErrorMessage message={message} />;
        </>
      );
    case 'idle':
      return (
        <>
          <Summary />
          <ul>
            {savedMovies.map((movie) => (
              <li key={movie.imdbID}>
                <WatchedMoviePreview movie={movie} />
              </li>
            ))}
          </ul>
        </>
      );
    case 'success':
      return movie && <MovieDetailed movie={movie} />;
  }
}
