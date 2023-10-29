import { useAppDispatch } from '@/store/hooks';
import s from './MovieDetailed.module.scss';
import { Rating } from '../Rating';
import { setStatus } from '@/store/movieDetails.slice';
import { useState } from 'react';
import { MovieDetails } from '@/types';
import { saveMovie } from '@/store/moviesSaved.slice';
import { useKey } from '@/hooks/useKey';

export function MovieDetailed({ movie }: { movie: MovieDetails }) {
  const { Title, Poster, Year, Runtime, Genre, Plot, Actors, Director, imdbRating, imdbID } = movie;
  const dispatch = useAppDispatch();
  const [userRate, setUserRate] = useState(0);
  const data = { imdbID, imdbRating, Poster, Runtime, Title, userRate, Year };

  const close = () => {
    dispatch(setStatus('idle'));
  };

  const onSave = () => {
    dispatch(saveMovie(data));
    close();
  };

  useKey('escape', close);

  return (
    <section className={s.section}>
      {/* есть функция close, почему здесь инлайн? */}
      <button className={s.back} onClick={() => dispatch(setStatus('idle'))}>
        ❮
      </button>
      <div className={s.info}>
        <img className={s.poster} src={Poster} alt={`${Title} poster`} />
        <h2 className={s.title}>{Title}</h2>
        <p>{`${Year} • ${Runtime}`}</p>
        <p>{Genre}</p>
        <p>⭐️ {imdbRating} IMDb rating</p>
      </div>
      <div className={s.description}>
        <div className={s.controls}>
          <Rating max={10} size={30} className={s.rating} onSet={setUserRate} />
          {userRate > 0 && (
            <button className={s.add} onClick={onSave}>
              + Add to list
            </button>
          )}
        </div>
        <em>{Plot}</em>
        <p>{Actors}</p>
        <p>{Director}</p>
      </div>
    </section>
  );
}
