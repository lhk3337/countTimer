import React from "react";
import styled from "styled-components";

const Layout = ({ children }: any) => {
  return (
    <Container>
      <Title>Timer</Title>
      {children}
    </Container>
  );
};

const Container = styled.main`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.size.max.wlg};
  padding: ${({ theme }) => theme.spacing.space9};
  margin-top: ${({ theme }) => theme.spacing.space40};
  background-color: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text.mainColor};
  border-radius: ${({ theme }) => theme.size.radiusSize.roundedXl};
`;
const Title = styled.h1`
  ${({ theme }) => theme.size.text.lg}
`;

export default Layout;
