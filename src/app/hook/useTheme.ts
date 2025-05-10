import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { lightTheme } from '@/styles/themes';

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme || lightTheme;
};
