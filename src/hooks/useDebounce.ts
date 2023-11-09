import { useState, useRef, useEffect } from 'react';

export function useDebounce(value: string, delay: number = 300) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [debounced, setDebounced] = useState('');

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setDebounced(value), delay);

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, delay]);

  return debounced;
}
