import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`

${reset}

  body {
    font-family: 'Roboto', sans-serif;
  }
button{
  outline: none;
  border: none;
  margin: 0;
}
`;

export default GlobalStyle;
