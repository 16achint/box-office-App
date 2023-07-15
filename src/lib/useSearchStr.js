import { useState, useEffect } from 'react';

const usePersistedState = (initialState, sessionStorageKey) => {
  const [state, setState] = useState(() => {
    const PersistedValue = sessionStorage.getItem(sessionStorageKey);

    return PersistedValue ? JSON.parse(PersistedValue) : initialState;
  });
  useEffect(() => {
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
  }, [state, sessionStorageKey]);
  return [state, setState];
};
export const useSearchstr = () => {
  return usePersistedState('', 'SearchString');
};
