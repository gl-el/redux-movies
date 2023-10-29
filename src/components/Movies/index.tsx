import { useAppSelector } from '@/store/hooks';
import { MoviePreview } from '../MoviePreview';
import { Loader } from '../ui/Loader';
import { ErrorMessenger } from '../ui/ErrorMessenger';

export function Movies() {
  const { movies, status, message } = useAppSelector((state) => state.movies);

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'error') {
    return <ErrorMessenger message={message} />;
  }

  return (
    // компонент знает что ему надо именно в боксе быть, хотя он просто список рендерит
    status === 'success' && (
      <ul>
        {movies.map((data) => (
          <li key={data.imdbID}>
            <MoviePreview movie={data} />
          </li>
        ))}
      </ul>
    )
  );
}
