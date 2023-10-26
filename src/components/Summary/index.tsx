import { useAppSelector } from '@/store/hooks';
import s from './Summary.module.scss';

const avgCount = (sum: number, total: number) => {
  return total ? Math.round((sum / total) * 100) / 100 : 0;
};

export function Summary() {
  const { savedMovies } = useAppSelector((state) => state.moviesSaved);
  const quantity = savedMovies.length;
  const total = { time: 0, userRate: 0, imdbRate: 0 };
  savedMovies.forEach((movie) => {
    if (movie) {
      total.time += Number(movie.Runtime.split(' ')[0]);
      total.userRate += Number(movie.userRate);
      total.imdbRate += Number(movie.imdbRating);
    }
  });
  return (
    <div className={s.summary}>
      <h2 className={s.header}>Watched movies</h2>
      <div className={s.details}>
        <p>#️⃣ {quantity} movies</p>
        <p>⏳ {total.time} min</p>
        <p>⭐️ {avgCount(total.userRate, quantity)}</p>
        <p>🌟 {avgCount(total.imdbRate, quantity)}</p>
      </div>
    </div>
  );
}
