import { useAppSelector } from '@/store/hooks';
import { MovieDetailed } from '../MovieDetailed';
import { WatchedMoviePreview } from '../WatchedMoviePreview';
import { ErrorMessenger } from '../ui/ErrorMessenger';
import { Loader } from '../ui/Loader';

export function WatchedMovies() {
  const { status, movie, message } = useAppSelector((state) => state.movieDetails);
  const { savedMovies } = useAppSelector((state) => state.moviesSaved);

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'error') {
    return <ErrorMessenger message={message} />;
  }

  if (status === 'idle') {
    return (
      <ul>
        {savedMovies.map((movie) => (
          // не надо индекс массива использовать как ключ
          <li key={movie.imdbID}>
            <WatchedMoviePreview movie={movie} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    // компонент знает что ему надо именно в боксе быть, хотя он просто список рендерит
    movie && <MovieDetailed movie={movie} />
  );
}
