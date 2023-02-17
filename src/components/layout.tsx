import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Title>Timer</Title>
      {children}
    </Container>
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
  margin-top: ${({ theme }) => theme.spacing.size.space40};
  background-color: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.secondaryColor};
  border-radius: ${({ theme }) => theme.size.radiusSize.roundedXl};
`;
const Title = styled.h1`
  margin-top: ${({ theme }) => theme.spacing.size.space7};
  margin-bottom: ${({ theme }) => theme.spacing.size.space10};
  ${({ theme }) => theme.size.text.XL6}
  font-weight: bold;
`;

export default Layout;
