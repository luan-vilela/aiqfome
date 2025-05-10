'use client';

import { useThemeStore } from '@/store/useThemeStore';

export default function Home() {
  const { toggleTheme, theme } = useThemeStore();
  // const theme = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>{theme === 'dark' ? '🌙 Dark' : '☀️ Light'}</button>
    </div>
  );
}
