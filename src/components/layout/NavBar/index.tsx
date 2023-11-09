import { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getMovies, resetSearch, setStatus } from '@/store/movies.slice';
import { Logo } from '@/components/UI/Logo';
import { Input } from '@/components/UI/Input';
import { TotalResults } from '@/components/TotalResults';
import s from './NavBar.module.scss';
import { useKeyDown, useDebounce } from '@/hooks';

export function NavBar() {
  const [inputValue, setInputValue] = useState('');
  const debouncedInputValue = useDebounce(inputValue, 500);
  console.log(debouncedInputValue);
  const { total } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    dispatch(setStatus('pending'));
  }, [inputValue]);

  useEffect(() => {
    if (!debouncedInputValue) {
      dispatch(resetSearch());
      return;
    }
    dispatch(getMovies(debouncedInputValue));
  }, [debouncedInputValue, dispatch]);

  const focusInput = () => {
    if (document.activeElement === inputRef.current) return;
    if (inputRef.current) inputRef.current.focus();
    setInputValue('');
  };

  useKeyDown('enter', focusInput);

  return (
    <nav className={s.nav}>
      <Logo />
      <Input
        placeholder='Search movies'
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <TotalResults total={total} />
    </nav>
  );
}
