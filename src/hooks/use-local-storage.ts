import { useState, useEffect } from 'react';

type ReturnType<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>
];

const useLocalStorage = <T,>(
  key: string,
  initialValue: []
): ReturnType<T> => {

  const [state, setState] = useState<T>(() => {
    if (!initialValue) {return;}
    try {
      const value = localStorage.getItem(key);

      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    }
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorage;
