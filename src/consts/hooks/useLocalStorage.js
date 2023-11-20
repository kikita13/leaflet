import { useEffect, useState } from "react";

export const useLocalStorage = (key, data) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData || data;
  });
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);
  return [state, setState];
};
