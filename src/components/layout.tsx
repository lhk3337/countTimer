import React from "react";
import styled from "styled-components";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Container>{children}</Container>
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
