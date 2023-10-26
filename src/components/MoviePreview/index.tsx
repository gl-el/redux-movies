import { Movie } from '@/types';
import { getMovie } from '@/store/movieDetails.slice';
import { useAppDispatch } from '@/store/hooks';
import s from './MoviePreview.module.scss';

export function MoviePreview({ movie }: { movie: Movie }) {
  const { Poster: poster, Title: title, Year: year, imdbID } = movie;
  const dispatch = useAppDispatch();
  return (
    <li
      className={s.movie}
      onClick={() => {
        dispatch(getMovie(imdbID));
      }}
    >
      <img src={poster} alt={`${title} poster`} className={s.poster} />
      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <p>{year}</p>
      </div>
    </li>
  );
}
