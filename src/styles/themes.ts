import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    brand: {
      200: '#EECFFC',
      500: '#7B1FA2',
      700: '#5B21B6',
    },
    neutral: {
      0: '#FFFFFF',
      50: '#F5F6F9',
      100: '#EEF0F5',
      200: '#CDD1D9',
      400: '#A8ADB7',
      500: '#6D6F73',
      700: '#393A3C',
      900: '#202326',
    },
    teal: {
      50: '#F2FAFA',
      400: '#00A296',
      600: '#027A7A',
    },
    other: {
      warning: '#FACC15',
      success: '#02A117',
    },
    decorative: {
      divider: '#D1D5DB',
      icon: '#9CA3AF',
    },
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    brand: {
      200: '#D6BBFB',
      500: '#A855F7',
      700: '#7E22CE',
    },
    teal: {
      50: '#D1FAF9',
      400: '#14B8A6',
      600: '#0F766E',
    },
    neutral: {
      0: '#18181B',
      50: '#27272A',
      100: '#3F3F46',
      200: '#52525B',
      400: '#A1A1AA',
      500: '#D4D4D8',
      700: '#E4E4E7',
      900: '#FFFFFF',
    },
    other: {
      warning: '#FACC15',
      success: '#4ADE80',
    },
    decorative: {
      divider: '#3F3F46',
      icon: '#A1A1AA',
    },
  },
};
