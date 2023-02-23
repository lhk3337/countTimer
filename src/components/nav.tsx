import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <NavContainer>
      <Title>1h Timers</Title>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.color.primaryColor};
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  padding-top: ${({ theme }) => theme.spacing.size.space10};
  padding-bottom: ${({ theme }) => theme.spacing.size.space10};
  ${({ theme }) => theme.size.text.XL6}
  color: ${({ theme }) => theme.color.secondaryColor};
  font-weight: bold;
`;
export default Nav;
