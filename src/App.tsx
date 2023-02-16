// import React from "react";
import { ThemeProvider } from "styled-components";
import Bottom from "./components/bottom";
import Layout from "./components/layout";
import Clock from "./components/clock";
import theme from "./styles/theme";
import GlobalStyle from "./styles/Global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Clock />
        <Bottom />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
