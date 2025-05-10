import 'styled-components';

interface Colors {
  text: string;
  background: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
