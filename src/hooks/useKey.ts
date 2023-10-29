import { useEffect } from 'react';

// useKeyDown, key это про ключи какие-то
export function useKey(keyCode: string, action: () => void) {
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
