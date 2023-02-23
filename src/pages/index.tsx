import React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/layout";
import Timer from "../components/timer";
import Seo from "../components/seo";
import styled from "styled-components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Timer />
      <DescContainer>
        <Desc>The best 1 hour countdown timer for timed assignments!</Desc>
        <Desc>Increase your focus and maximize your performance.</Desc>
        <BarContent>
          <BarDesc>After setting the time, press the start button to operate immediately.</BarDesc>
          <BarDesc>
            <Bar />
            showing time remaining
          </BarDesc>
        </BarContent>
      </DescContainer>
    </Layout>
  );
};

export default IndexPage;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Desc = styled.span`
  ${({ theme }) => theme.size.text.XL4};
  padding: ${({ theme }) => theme.spacing.size.space9};
  margin-bottom: ${({ theme }) => theme.spacing.size.space5};
  @media screen and (max-width: 500px) {
    ${({ theme }) => theme.size.text.XL2};
  }
`;
const BarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.size.space10};
`;
const Bar = styled.div`
  width: 100%;
  height: 15px;
  background-color: ${({ theme }) => theme.color.thirdColor};
`;
const BarDesc = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing.size.space9};
  padding-left: ${({ theme }) => theme.spacing.size.space9};
  padding-right: ${({ theme }) => theme.spacing.size.space9};
  ${({ theme }) => theme.size.text.XL2};
  @media screen and (max-width: 500px) {
    ${({ theme }) => theme.size.text.lg};
  }
`;
export const Head = () => <Seo />;
