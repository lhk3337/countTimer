import React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/layout";
import Timer from "../components/timer";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Timer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;
