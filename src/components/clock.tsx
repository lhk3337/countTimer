import React from "react";
import styled from "styled-components";

const Clock = () => {
  return (
    <Container>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At amet delectus eaque neque molestias sunt! Laboriosam
      iure eligendi aut aliquam optio. Sit non quas numquam sequi totam sunt soluta iste!
    </Container>
  );
};

const Container = styled.div`
  margin-top: ${({ theme }) => theme.spacing.space1};
`;
export default Clock;
