import { persist } from 'zustand/middleware';
import { createWithEqualityFn } from 'zustand/traditional';

interface IThemeState {
  theme: 'light' | 'dark';
  setTheme: (payload: 'light' | 'dark') => void;
}

const useStoreTheme = createWithEqualityFn<IThemeState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
      skipHydration: true,
    }
  ),
  Object.is
);

export default useStoreTheme;
