import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    background-blend-mode: screen, screen, lighten, overlay, lighten, difference, normal;
	  background-size: 400% 400%;
    color: ${props => props.theme.primary};
    font-family: 'Roboto';
  }
`;