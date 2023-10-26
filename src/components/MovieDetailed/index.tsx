import { useAppDispatch } from '@/store/hooks';
import s from './MovieDetailed.module.scss';
import { Rating } from '../Rating';
import { setStatus } from '@/store/movieDetails.slice';
import { useState } from 'react';
import { MovieDetails } from '@/types';

export function MovieDetailed({ movie }: { movie: MovieDetails }) {
  const {
    Title: title,
    Poster: poster,
    Year: year,
    Runtime: runtime,
    Genre: genre,
    Plot: plot,
    Actors: actors,
    Director: director,
    imdbRating,
    imdbID,
  } = movie;
  const dispatch = useAppDispatch();
  const [userRate, setUserRate] = useState(0);
  return (
    <section className={s.section}>
      <button className={s.back} onClick={() => dispatch(setStatus('idle'))}>
        ❮
      </button>
      <div className={s.info}>
        <img className={s.poster} src={poster} alt={`${title} poster`} />
        <h2 className={s.title}>{title}</h2>
        <p>{`${year} • ${runtime}`}</p>
        <p>{genre}</p>
        <p>⭐️ {imdbRating} IMDb rating</p>
      </div>
      <div className={s.description}>
        <div className={s.controls}>
          <Rating max={10} size={30} className={s.rating} onSet={setUserRate} />
          {userRate > 0 && <button className={s.add}>+ Add to list</button>}
        </div>
        <em>{plot}</em>
        <p>{actors}</p>
        <p>{director}</p>
      </div>
    </section>
  );
}
