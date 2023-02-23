import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/Global";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container>{children}</Container>
      </ThemeProvider>
    </>
  );
};

const Container = styled.main`
  ${({ theme }) => theme.spacing.margin.mxAuto}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.size.max.wsm};
  padding: ${({ theme }) => theme.spacing.size.space9};
  margin-top: 12%;
  background-color: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.secondaryColor};
  border-radius: ${({ theme }) => theme.size.radiusSize.roundedXl};
`;

export default Layout;
