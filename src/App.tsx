// import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./components/layout";
import Timer from "./components/timer";
import theme from "./styles/theme";
import GlobalStyle from "./styles/Global";
import Seo from "./components/seo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <GlobalStyle />
      <Layout>
        <Timer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
