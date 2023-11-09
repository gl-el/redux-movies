import { useAppSelector } from '@/store/hooks';
import { MoviePreview } from '../MoviePreview';
import { Loader } from '../UI/Loader';
import { ErrorMessage } from '../UI/ErrorMessage';

export function Movies() {
  const { movies, status, message } = useAppSelector((state) => state.movies);

  switch (status) {
    case 'pending':
      return <Loader />;
    case 'error':
      return <ErrorMessage message={message} />;
    case 'success':
      return (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <MoviePreview key={movie.imdbID} movie={movie} />
            </li>
          ))}
        </ul>
      );
  }
}
