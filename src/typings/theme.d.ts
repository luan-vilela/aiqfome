import 'styled-components';

interface Brand {
  200: string;
  500: string;
  700: string;
}

interface Teal {
  50: string;
  400: string;
  600: string;
}

interface Neutral {
  0: string;
  50: string;
  100: string;
  200: string;
  400: string;
  500: string;
  700: string;
  900: string;
}

interface Other {
  warning: string;
  success: string;
}

interface Decorative {
  divider: string;
  icon: string;
}

interface Colors {
  brand: Brand;
  teal: Teal;
  neutral: Neutral;
  other: Other;
  decorative: Decorative;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
