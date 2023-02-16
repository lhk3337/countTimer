import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
const GlobalStyle = createGlobalStyle`
${reset}


  body {
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
    font-family: 'Roboto', sans-serif;
  }

`;

export default GlobalStyle;
