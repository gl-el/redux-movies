import { Movie } from '@/types';
import { getMovie } from '@/store/movieDetails.slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import s from './MoviePreview.module.scss';

export function MoviePreview({ movie }: { movie: Movie }) {
  const { Poster: poster, Title: title, Year: year, imdbID } = movie;
  const { status } = useAppSelector((state) => state.movieDetails);
  const dispatch = useAppDispatch();
  const handleClick = () => {
    if (status === 'pending') return;
    dispatch(getMovie(imdbID));
  };
  return (
    <li className={s.movie} onClick={handleClick}>
      <img src={poster} alt={`${title} poster`} className={s.poster} />
      <div className={s.info}>
        <h3 className={s.title}>{title}</h3>
        <p>{year}</p>
      </div>
    </li>
  );
}
