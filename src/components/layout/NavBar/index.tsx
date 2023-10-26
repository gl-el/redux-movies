import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getMovies, resetSearch } from '@/store/movies.slice';
import { Logo } from '@/components/Logo';
import { Input } from '@/components/Input';
import { Counter } from '@/components/Counter';
import s from './NavBar.module.scss';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const { total } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!inputValue) {
      dispatch(resetSearch());
      return;
    }
    const searchMovies = setTimeout(() => {
      dispatch(getMovies(inputValue));
    }, 500);

    return () => clearTimeout(searchMovies);
  }, [inputValue, dispatch]);

  return (
    <nav className={s.nav}>
      <Logo />
      <Input placeholder='Search movies' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <Counter total={total} />
    </nav>
  );
}
