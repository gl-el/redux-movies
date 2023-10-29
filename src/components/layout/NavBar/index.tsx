import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getMovies, resetSearch, setStatus } from '@/store/movies.slice';
import { Logo } from '../../ui/Logo';
import { Input } from '../../ui/Input';
import { Counter } from '@/components/Counter';
import s from './NavBar.module.scss';
import { useKey } from '@/hooks/useKey';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const { total } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // ты же в экстраредюсерах стейт проставляешь, зачем дубль?
    dispatch(setStatus('pending'));
    if (!inputValue) {
      dispatch(resetSearch());
      return;
    }

    // таймаут для тротлинга? надо в хук вынести useThrottle
    const searchMovies = setTimeout(() => {
      dispatch(getMovies(inputValue));
    }, 300);

    return () => clearTimeout(searchMovies);
  }, [inputValue, dispatch]);

  const focusInput = () => {
    if (document.activeElement === inputRef.current) return;
    if (inputRef.current) inputRef.current.focus();
    setInputValue('');
  };

  useKey('enter', focusInput);

  return (
    <nav className={s.nav}>
      <Logo />
      <Input
        placeholder='Search movies'
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Counter total={total} />
    </nav>
  );
}
