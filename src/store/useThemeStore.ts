'use client';

import { create } from 'zustand';

type Theme = 'light' | 'dark';

type ThemeState = {
  theme: Theme;
  initialized: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  initTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'light',
  initialized: false,
  setTheme: (theme) => {
    localStorage.setItem('theme', theme);
    set({ theme });
  },
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }),
  initTheme: () => {
    const stored = localStorage.getItem('theme') as Theme;
    set({ theme: stored ?? 'light', initialized: true });
  },
}));
