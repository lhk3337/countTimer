import React from "react";
import type { PageProps } from "gatsby";
import { ThemeProvider } from "styled-components";

import Layout from "../components/layout";
import Timer from "../components/timer";
import theme from "../styles/theme";
import GlobalStyle from "../styles/Global";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Timer />
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
