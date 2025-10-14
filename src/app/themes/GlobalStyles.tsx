import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family:'Montserrat', sans-serif;
    padding: 0;
    box-sizing: border-box;

  @media screen and (max-width: 550px)  {
      #link-experience, #link-bio, #link-about, #link-experience, #link-contact, #link-projects {
        display:none;
      }
    }
  };

  body {
    color: ${(props) => props.theme.primaryColor};
    margin: 0;
  }
`;
