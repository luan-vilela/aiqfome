'use client';

import { useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import { useThemeStore } from '../store/useThemeStore';
import { GlobalStyle } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/themes';

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const { theme, initTheme, initialized } = useThemeStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initTheme();
    }
  }, [initTheme]);

  if (!initialized) return null;

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
