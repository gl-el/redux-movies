import { useAppDispatch } from '@/store/hooks';
import { deleteMovie } from '@/store/moviesSaved.slice';
import { MovieSaved } from '@/types';
import s from './WatchedMoviePreview.module.scss';

export function WatchedMoviePreview({ movie }: { movie: MovieSaved }) {
  const dispatch = useAppDispatch();
  const onDelete = () => {
    dispatch(deleteMovie(movie.imdbID));
  };
  return (
    <div className={s.movie}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🌟</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{movie.userRate}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.Runtime}</span>
        </p>
        <button className={s.btnDel} onClick={onDelete}>
          X
        </button>
      </div>
    </div>
  );
}
