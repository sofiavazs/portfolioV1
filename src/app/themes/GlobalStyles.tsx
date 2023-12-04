import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    padding: 0;
    box-sizing: border-box;

    @media screen and (min-width: 0px) and (max-width: 550px) {
      #link-experience, #link-bio, #link-about, #link-experience, #link-contact, #link-projects {
        display:none;
      }
    }
  };

  body {
    background: ${props => props.theme.background};
    background-blend-mode: screen, screen, lighten, overlay, lighten, difference, normal;
	  background-size: 400% 400%;
    color: ${props => props.theme.primary};
    margin: 0;
  }

  main {
    display: flex;
    flex-direction: column;
  }
`;