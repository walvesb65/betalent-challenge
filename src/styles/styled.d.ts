import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      hover: string;
      border: string;
      background: string;
      Blue10: string;
      text: string;
      header: string;
      primaryLight: string;
      textSecondary: string;
    };
    fonts: {
      main: string;
    };
  }
}
