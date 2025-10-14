import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    font: string;
    button: {
      primary: {
        background: string;
        color: string;
        font: string;
      };
    };
    card: {
      background: string;
      boxShadow: string;
      border: string;
    };
  }
}
