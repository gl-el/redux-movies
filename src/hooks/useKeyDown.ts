import { useEffect } from 'react';

export function useKeyDown(keyCode: string, action: () => void) {
  useEffect(() => {
    const cb = (e: KeyboardEvent) => {
      if (e.code.toLowerCase() === keyCode.toLowerCase()) {
        action();
      }
    };

    document.addEventListener('keydown', cb);

    return () => document.removeEventListener('keydown', cb);
  }, [action]);
}
